const express = require('express');
const router = express.Router();
const Card = require('../database/models/Card')
const User = require('../database/models/User')

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else {
    res.status(401).json({ success: false, error: 'not authenticated' });
  }
}

router.route('/')
  .post(isAuthenticated, function (req, res) { //make card
    Card.forge({
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id,
      status_id: req.body.status_id,
      created_by: req.user.id,
      assigned_to: req.body.assigned_to
    }).save()
      .then(function (err) {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.status(500).json({ success: false, error: err });
      });
  })

router.route('/cards')
  .get(function (req, res) {
    Card.fetchAll({
      columns: ['id', 'title', 'body', 'priority_id', 'status_id', 'created_by', 'assigned_to'],
      withRelated: [{
        'assignedUser': function (qb) {
          qb.column('id', 'first_name', 'last_name');
        },
        'createdByUser': function (y) {
          y.column('id', 'first_name', 'last_name');
        }
      }]
    })
      .then(function (cards) {
        res.json({ 'cards': cards });
      });
  })

router.route('/users')
  .get(function (req, res) {
    User.fetchAll({ columns: ['id', 'first_name', 'last_name'] })
      .then(function (users) {
        res.json({ 'users': users });
      });
  });

router.route('/:id')
  .get(function (req, res) { //select card
    Card.where('id', req.params.id).fetch()
      .then(function (card) {
        res.json(card.attributes);
      })
      .catch(function (err) {
        res.status(404).json({ success: false, error: 'card does not exist' });
      });
  })
  .put(isAuthenticated, function (req, res) { //update card
    Card.where('id', req.params.id).save({
      id: req.params.id,
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id,
      status_id: req.body.status_id,
      created_by: req.user.id,
      assigned_to: req.body.assigned_to
    }, { patch: true })
      .then(function (err) {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.status(500).json({ success: false, error: err });
      });
  })
  .delete(isAuthenticated, function (req, res) { //delete card
    new Card({ id: req.params.id }).destroy()
      .then(function () {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.status(500).json({ success: false, error: err });
      });
  })

module.exports = router;
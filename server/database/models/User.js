const bookshelf = require('./bookshelf');
const Card = require('./Card');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get hasTimeStamps() { return true }
  createdCards() {
    return this.hasMany(Card, 'created_by');
  }
  assignedCards() {
    return this.hasMany(Card, 'assigned_to');
  }
};

module.exports = bookshelf.model('User', User);
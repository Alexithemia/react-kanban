const bookshelf = require('./bookshelf');
const Card = require('./Card');

let Priority = bookshelf.Model.extend({
  tableName: 'priorities',
  hasTimeStamps: true,
  cards: function () {
    return this.hasMany(Card);
  }
});

module.exports = bookshelf.model('Priority', Priority);
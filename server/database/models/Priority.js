const bookshelf = require('./bookshelf');
const Card = require('./Card');

class Priority extends bookshelf.Model {
  get tableName() { return 'priorities' }
  get hasTimeStamps() { return true }
  cards() {
    return this.hasMany(Card);
  }
};

module.exports = bookshelf.model('Priority', Priority);
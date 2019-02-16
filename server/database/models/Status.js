const bookshelf = require('./bookshelf');

class Status extends bookshelf.Model {
  get tableName() { return 'statuses' }
  get hasTimeStamps() { return true }
  cards() {
    return this.hasMany(Card);
  }
};

module.exports = bookshelf.model('Status', Status);
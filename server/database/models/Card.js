const bookshelf = require('./bookshelf');
const User = require('./User');
const Status = require('./Status');
const Priority = require('./Priority');

class Card extends bookshelf.Model {
  get tableName() { return 'cards'; }
  get hasTimestamps() { return true }

  assignedUser() {
    return this.belongsTo('User', 'assigned_to', 'id');
  }

  createdByUser() {
    return this.belongsTo('User', 'created_by', 'id');
  }

  status() {
    return this.belongsTo('Status');
  }

  priority() {
    return this.belongsTo('Priority');
  }
}

module.exports = bookshelf.model('Card', Card);
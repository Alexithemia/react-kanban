const bookshelf = require('./bookshelf');
const User = require('./User');
const Status = require('./Status');
const Priority = require('./Priority');

let Card = bookshelf.Model.extend({
  tableName: 'cards',
  hasTimeStamps: true,
  assignedUser: function () {
    return this.belongsTo('User', 'assigned_to');
  },
  createdByUser: function () {
    return this.belongsTo('User', 'created_by');
  },
  status: function () {
    return this.belongsTo('Status');
  },
  priority: function () {
    return this.belongsTo('Priority');
  },
});

module.exports = bookshelf.model('Card', Card);
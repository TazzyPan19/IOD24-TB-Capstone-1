'use strict'

const Pet = require('./pet')
const Admin = require('./admin')
const User = require('./user')
const Order = require('./order')

async function init() {
  await Pet.sync();
  await Admin.sync();
  await User.sync();
  await Order.sync();
};

init();

// Pet.belongsTo(User, { foreignKey: 'userId })
// Order.belongsTo(User, { foreignKey: 'userId' })
// User.hasMany(Post, { foreignKey: 'userId' })

module.exports = { 
  Pet,
  User,
  Admin,
  Order
};
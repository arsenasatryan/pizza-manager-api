const prices  = require('./pizza-prices.json');
const orders = require('./orders.json');

module.exports = function() {
  return {
    prices,
    orders,
  };
}

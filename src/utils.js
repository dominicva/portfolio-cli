'use strict';

const path = require('path');
const fs = require('fs');

// path must be relative to work with fs
const portfolioLocation = path.join(__dirname, 'portfolio.json');

/**
 * Should read holdings at the @portfolioLocation
 * path and convert it to a JS object.
 * @returns {Object}
 */
const getHoldings = function () {
  const holdings = fs.readFileSync(portfolioLocation);
  return JSON.parse(holdings);
};

/**
 * Takes an object containing ALL holdings, converts it
 * to JSON and saves it at the @portfolioLocation path.
 * @param {Object} holdings - holdings object
 */
const saveHoldings = function (holdings) {
  fs.writeFileSync(portfolioLocation, JSON.stringify(holdings, null, 2));
};

module.exports = {
  portfolioLocation,
  getHoldings,
  saveHoldings,
};

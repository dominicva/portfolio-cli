'use strict';

const newHoldingPrompts = [
  { type: 'input', name: 'holdingName', message: 'Holding to add' },
  { type: 'input', name: 'usdAmount', message: 'Amount (USD)' },
  {
    type: 'list',
    name: 'theme',
    message: 'Investment themes',
    choices: [
      {
        key: 't',
        name: 'Technology',
        value: 'Tech',
      },
      {
        key: 'b',
        name: 'Bio',
        value: 'Bio',
      },
      {
        key: 'i',
        name: 'Industrials',
        value: 'Industrials',
      },
    ],
  },
];

module.exports = newHoldingPrompts;

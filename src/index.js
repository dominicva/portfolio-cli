'use strict';

const program = require('commander');
const { prompt } = require('inquirer');
const chalk = require('chalk');
const newHoldingPrompts = require('./prompts');
const { getHoldings, saveHoldings } = require('./utils');

program.version('0.0.1').description('Investment portfolio CLI program');

program
  .command('new')
  .alias('n')
  .description('add a new holding')
  .action(() => {
    prompt(newHoldingPrompts)
      .then(({ holdingName, usdAmount, theme }) => {
        const key = holdingName;
        const holdings = getHoldings();

        if (holdings[key]) {
          throw new Error('A holding with this name already exists');
        }

        holdings[key] = { holdingName, usdAmount, theme };
        saveHoldings(holdings);
      })
      .catch((err) => console.error(err));
  });

program
  .command('list')
  .alias('l')
  .description('list all holdings')
  .action(() => {
    const holdings = getHoldings();

    prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Select a holding',
        choices: Object.keys(holdings),
      },
    ])
      .then(({ selected }) => {
        const holding = holdings[selected];
        console.log(chalk.yellow(JSON.stringify(holding, null, 2)));
      })
      .catch((err) => console.error(err));
  });

program.parse(process.argv);

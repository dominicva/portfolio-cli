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
  });

// program
//   .command('list')
//   .alias('l')
//   .description('list all contacts')
//   .action(() => {
//     const contacts = getContacts();
//     prompt([
//       {
//         type: 'list',
//         name: 'selected',
//         message: 'Select a contact',
//         choices: Object.keys(contacts),
//       },
//     ]).then(({ selected }) => {
//       const contact = contacts[selected];
//       console.log(JSON.stringify(contact, null, 2));
//     });
//   });

program.parse(process.argv);

// program
//   .command('new')
//   .alias('n')
//   .description('add a new contact')
//   .action(() => {
//     prompt(newContactPrompts).then(({ firstName, lastName, phoneNumber }) => {
//       const key = firstName + ' ' + lastName;
//       const contacts = getContacts();
//       contacts[key] = { firstName, lastName, phoneNumber };
//       saveContacts(contacts);
//     });
//   });
// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     console.log(
//       `Adding ${chalk.yellow.bold(answers.companyName)} to your portfolio.`,
//       '\n'
//     );
//     fs.appendFileSync(FILEPATH, ',\n' + JSON.stringify(answers, null, 2));
//   })
//   .catch((error) => {
//     // Something else went wrong
//     console.error(error);
//   });

/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

// var inquirer = require('..');

// console.log('Hi, welcome to Node Pizza');

// var questions = [
//   {
//     type: 'confirm',
//     name: 'toBeDelivered',
//     message: 'Is this for delivery?',
//     default: false,
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: "What's your phone number?",
//     validate: function (value) {
//       var pass = value.match(
//         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//       );
//       if (pass) {
//         return true;
//       }

//       return 'Please enter a valid phone number';
//     },
//   },
//   {
//     type: 'list',
//     name: 'size',
//     message: 'What size do you need?',
//     choices: ['Large', 'Medium', 'Small'],
//     filter: function (val) {
//       return val.toLowerCase();
//     },
//   },
//   {
//     type: 'input',
//     name: 'quantity',
//     message: 'How many do you need?',
//     validate: function (value) {
//       var valid = !isNaN(parseFloat(value));
//       return valid || 'Please enter a number';
//     },
//     filter: Number,
//   },
//   {
//     type: 'expand',
//     name: 'toppings',
//     message: 'What about the toppings?',
//     choices: [
//       {
//         key: 'p',
//         name: 'Pepperoni and cheese',
//         value: 'PepperoniCheese',
//       },
//       {
//         key: 'a',
//         name: 'All dressed',
//         value: 'alldressed',
//       },
//       {
//         key: 'w',
//         name: 'Hawaiian',
//         value: 'hawaiian',
//       },
//     ],
//   },
//   {
//     type: 'rawlist',
//     name: 'beverage',
//     message: 'You also get a free 2L beverage',
//     choices: ['Pepsi', '7up', 'Coke'],
//   },
//   {
//     type: 'input',
//     name: 'comments',
//     message: 'Any comments on your purchase experience?',
//     default: 'Nope, all good!',
//   },
//   {
//     type: 'list',
//     name: 'prize',
//     message: 'For leaving a comment, you get a freebie',
//     choices: ['cake', 'fries'],
//     when: function (answers) {
//       return answers.comments !== 'Nope, all good!';
//     },
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log('\nOrder receipt:');
//   console.log(JSON.stringify(answers, null, '  '));
// });
#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magentaBright.bold('\n \t Welcome To codeWithSahil - Currency Converter Application\n'));
let condition = true;
while (condition) {
    const currency = {
        USD: 1, //Base Currency US Dollar 
        EUR: 0.92,
        GBP: 0.79,
        JPY: 151.61,
        PKR: 277.54,
        INR: 83.30,
        KWD: 0.31,
        UAE: 3.67,
        SAR: 3.75,
        RMB: 7.23
    };
    let userAnswer = await inquirer.prompt([
        {
            name: 'from',
            message: chalk.greenBright.italic('Choice From Currency'),
            type: 'list',
            choices: [
                'USD',
                'EUR',
                'GBP',
                'JPY',
                'PKR',
                'INR',
                'KWD',
                'UAE',
                'SAR',
                'RMB'
            ]
        },
        {
            name: 'to',
            message: chalk.greenBright.italic('Choice To Currency'),
            type: 'list',
            choices: [
                'USD',
                'EUR',
                'GBP',
                'JPY',
                'PKR',
                'INR',
                'KWD',
                'UAE',
                'SAR',
                'RMB'
            ]
        },
        {
            name: 'amount',
            message: chalk.greenBright.italic('Enter Your Amount'),
            type: 'number'
        }
    ]);
    let fromAmount = currency[userAnswer.from];
    let toAmount = currency[userAnswer.to];
    let amount = userAnswer.amount;
    let baseAmount = amount / fromAmount;
    let convertAmount = baseAmount * toAmount;
    console.log(chalk.yellowBright.bold(`\n \t ${Math.round(convertAmount)} Your Convert Amonut\n`));
    let restartAns = await inquirer.prompt([
        {
            name: 'restart',
            type: 'confirm',
            message: 'Continue',
            default: false
        }
    ]);
    condition = restartAns.restart;
}
;
console.log(chalk.cyanBright.bold(`\n \t Thanks You \n`));

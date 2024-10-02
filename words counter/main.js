#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.yellowBright.italic(`Your word count is ${words.length}`));

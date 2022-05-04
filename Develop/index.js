// TODO: Include packages needed for this application
const readMeLayout = require('./createMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (value) => {
            if (value) { return true }
            else { return "Name Required" }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => {
            if (value) { return true }
            else { return "Title Required" }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you describe your project as?',
        validate: (value) => {
            if (value) { return true }
            else { return "Description Required" }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are your installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How was your project designed to be used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can one contribute to your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide license information.',
        choices: ["MIT", "Mozilla_Public", "GNU_Affero General Public Licence v3", "GNU_General Public License v2", "GNU_Lesser General Public License v2.1", "Apache_2.0",]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        validate: (value) => {
            if (value) { return true }
            else { return "Github required" }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email so others can reach you if they have questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
    });
    console.log('README created.');
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


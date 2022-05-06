// variables/packages needed 
const readMeLayout = require('./utils/createMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');

// questions to be prompted when program is ran in command line
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (value) => { // used to require name input
            if (value) { return true }
            else { return "Name Required" }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (value) => { // used to require title input 
            if (value) { return true }
            else { return "Title Required" }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you describe your project as?',
        validate: (value) => { // used to require description 
            if (value) { return true }
            else { return "Description Required" }
        }
    },
    {
        type: 'input',
        name: 'installation',
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
        message: 'Choose your license.',
        choices: ["MIT", "Mozilla_Public", "GNU_AGPLv3", "GNU_GPLv2", "Apache_2.0", "None"]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email so others can reach you if they have questions.',
    },
];

// function to create readme file and import data collected from user into that file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README created.')
    });
}

// function to initialize the app
function init() {
    inquirer.prompt(questions)
        .then((answers => {
            const readme = readMeLayout(answers);
            writeToFile("README.md", readme);
        }));
}

// calls function to initialize app
init();


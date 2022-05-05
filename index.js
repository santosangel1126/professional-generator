// including packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
//link to page of README being generated
const generatePage = require('./test')

// TODO: Create an array of questions for user input

const questions = [
    
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Can you give a description of your project?",
        name: "description"
    },
    {
        type:"input",
        message: "what was your motiviation?",
        name: "inspiration"
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log()
    })
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const result = generatePage(answers);
        writeToFile("test.md", result)
    })
}

init();
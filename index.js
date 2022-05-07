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
    {
        type: "input",
        message: "Why did you build the project? ( note: The Answer is not 'Because it was a homework assignment)'",
        name: " purpose "
    },
 {
     type: "list",
     message: "what format of coding was used in your project? ",
     name: "format of codes used ", 
     choices:[
     "css", 
     "html", 
     "javascript", 
     "node", 
     "inquirer",
     ]
 }, 
 {
     type: "list",
     message: "Please choose the appropriate license for this project:",
     name: "license",
     choices: [
         "Apache",
         "Academic",
         "GNU",
         "ISC",
         "MIT",
         "Chrome",
         "Open"
     ]
 },
 {
type: "input",
name: "contributing",
message: "Who are the contributors of this project"
 },
 {
     type: "input",
     name: "username",
     message: "Please enter your Github username:"
},
{
    type: "input",
    name: "email",
    message: "Please input your email address:"
},

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err;
        console.log(err)
    })
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const result = generatePage(answers);
        writeToFile("README.md", result)
    })
}

init();
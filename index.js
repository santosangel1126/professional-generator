// including packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
//link to page of README being generated
const generatePage = require('README.MD')


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
     name: "formats", 
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
{// provide user email for contact information
    type: "input",
    name: "email",
    message: "Please input your email address:",
    validate: userEmail => {
        if (userEmail){
            return true;
        } else {
            console.log('Please enter users Email');
            return false;
        }
      }
    }
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
// function to initailize app 

//(answers => {
    //return generatePage(answers);
//})
//.then(data => {
  //  return fs.writeFile(data);
//})
//.catch(err => {
//    console.log(err)
//})
function writeToFile(filename, data) {}

function init() {}


function init();
// including packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
//link to page of README being generated
const generatePage = require('.')

// TODO: Create an array of questions for user input

const questions = [
    return inquirer.prompt ([
        type; 'input',
        name: 'title',
        message: 'What is the name of Your Project?(Required)',
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('Please enter a Project name!');
                return false;
            }
            
            }
        },
        { // project description
            type: 'input'
            name: 'description',
            message: 'Please provide a description'

        }
    ])

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
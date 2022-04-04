// Packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require('inquirer');
const generateReadme = require("./utils/markdown-template.js")
const writeFileAsync = util.promisify(fs.writeFile);

// Object containing questions for user input
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please list the installation instructions.'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'List the contribution guidelines.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test intructions?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses need to be added to the README? (Check all that apply)',
            choices: ['MIT', 'Mozilla', 'IBM', 'Apache', 'Boost', 'Perl', 'Open Data Commons']
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'Please enter your e-mail:',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your e-mail!');
                return false;
              }
            }
          }
    ])
};
g
// TODO: Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Create README.md file
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('New README.md generated!');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app  
init ()

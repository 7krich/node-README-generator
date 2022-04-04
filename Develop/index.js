// Packages needed for this application
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const generatePage = require('./utils/markdown-template');

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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//           return console.log(err);
//         }
      
//         console.log("Success! Your README.md file has been generated")
//     });
// }

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
promptUser()
    .then(answers => console.log(answers))
    .then(readmeText => {
        return generatePage(readmeText);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .catch(err => {
        console.log(err);
    });


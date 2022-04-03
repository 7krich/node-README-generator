// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an object containing questions for user input
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
            message: 'Please list the installation instructions.',
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
            message: 'What are the test intrucitons?',
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
            choices: ['MIT', 'MSU', 'MDN', 'W3', 'Apple', 'Google', 'Microsoft']
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
            message: 'Enter your e-mail',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your e-mail!');
                return false;
              }
            }
          },
    ])

};

// TODO: Create a function to write README file
// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./index.html', fileContent, err => {
//             if (err) {
//                 reject (err);
//                 return;
//             }

//             resolve ({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
promptUser()
    .then(answers => console.log(answers));

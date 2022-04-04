const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.me', fileContent, err => {
          if (err) {
              reject (err);
              return;
          }

          resolve ({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

const copyFile = () => {
  return new Promise ((resolve, reject) => {
      fs.copyFile('./index.js', fileContent, err => {
          if (err) {
              reject(err);
              return;
          }

          resolve({
              ok: true,
              message: 'File Created!'
          });
      });
  });
};

module.exports = { writeFile, copyFile };

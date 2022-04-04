// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    `![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license.` 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license) {
//         return `${licenseLink}`
//     } else {
//         return "";
//     }
// }

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return "## License: " + renderLicenseBadge();
    } else {
        return "";
    }
};

// TODO: Create a function to generate markdown for README
function generateReadme (answers) {

  return `# ${answers.title}

`;
}


 module.exports = generateReadme;
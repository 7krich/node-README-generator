// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (licenses) {

    let ans = ""

    if (licenses.licenses.length !== 0) {

        ans += `## Licenses: \n`

    for (var i = 0; i < licenses.licenses.length; i++) {
      
            ans += `![badge](https://img.shields.io/badge/license-${licenses.licenses[i]}-brightgreen)`

        }
    } return ans
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseInfo(licInfo) {

    let ans = ""

    if (licInfo.licenses.length !== 0) {

        ans += `\n## Licenses:\nThe licenses used for this file include: \n`

        let resp = []

        console.log(licInfo.licenses)
            resp = licInfo.licenses.join(", ")
            ans += `${resp}\n`

    } return ans
}


// TODO: Create a function to generate markdown for README
function generateReadme (answers) {
    console.log(answers);

  return `
# ${answers.title} ${renderLicenseBadge(answers)}

## Description:
${answers.description}

## Table of Contents: 
  - [Description] (#description)
  - [Instructions] (#instructions)
  - [Guidelines] (#guidelines)
  - [Tests] (#test)
  - [Licenses] (#licenses)
  - [GitHub] (#github)
  - [E-Mail] (#email)

## Instructions:
${answers.instructions}

## Guidelines:
${answers.guidelines}

## Test Instructions:
${answers.test}
${renderLicenseInfo(answers)}
## GitHub:
https://github.com/${answers.github}

## E-mail:
Please feel free to e-mail me at: ${answers.email} if you have any questions!

`;
}


 module.exports = generateReadme;
const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
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

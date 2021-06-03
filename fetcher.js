const fs = require('fs')
const request = require('request');

const arg = process.argv;
const domain = arg[2];
const fileName = arg[3];
let fileSize

request(domain, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err)
      return
    }
    fileSizeCal();
  })
});

const fileSizeCal = function() {
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (!error) {
      fileSize = data.length;
      console.log(`Downloaded and saved ${fileSize} bytes to ${fileName}`);
    }
  });
};



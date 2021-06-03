const fs = require('fs');
// 

const breedDetailsFromFile = function() {
  fs.readFile('./index.html', 'utf8', (error, data) => {
    if (!error) {
      console.log(data.length);
    }
  });
};

console.log(breedDetailsFromFile());


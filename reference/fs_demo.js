const fs = require('fs')
const path = require("path")
//going over file system methods built into node.


//create a folder called test on our system
//fs.mkdir takes in 3 params 1. current directory(__dirname), 2. options (we don't have any for this), 3. is a callback function.
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
      if (err) throw err;
      console.log('Folder created...');
    });
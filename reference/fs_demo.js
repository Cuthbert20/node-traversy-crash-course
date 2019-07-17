const fs = require('fs')
const path = require("path")
//going over file system methods built into node.


//create a folder called test on our system
//fs.mkdir takes in 3 params 1. current directory(__dirname), 2. options (we don't have any for this), 3. is a callback function.
// fs.mkdir(path.join(__dirname, '/test1'), {}, err => {
//       if (err) throw err;
//       console.log('Folder created...');
//     });

    //create and write to a file
  //   fs.writeFile(
  // path.join(__dirname, '/test', 'hello.txt'),
  // 'Hello World!',
  // err => {
  //   if (err) throw err;
  //   console.log('File written to...')
  //   //in the callback func we are running appendFile which will append the file.
  //   fs.appendFile(
  //     path.join(__dirname, '/test', 'hello.txt'),
  //     'I love node.js',
  //     err => {
  //       if (err) throw err;
  //       console.log('File written to...')
  //     }
  //       )
  // }
  //   )

  //Read File
  // fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  //     if (err) throw err;
  //     console.log(data);
  //   });

    //rename a file using fs.rename
    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test',
    "helloworld.txt"), (err) => {
      if (err) throw err;
      console.log("file renamed...")
    })

  

  
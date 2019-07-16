const path = require('path')

//going over path methods built into node.

//Base file name, we wrapped __filename in method path.basename. returns base file name.
//console.log(path.basename(__filename))

//Directory name. If we want just the directory we wrap __filename in path.dirname
//console.log(path.dirname(__filename))

//File extension returns just the file extension
//console.log(path.extname(__filename))

//Create Path object returns root, dir, base, ext, name in an object.
//console.log(path.parse(__filename))
//getting just the base by descructuring the object
//console.log(path.parse(__filename).base)

//Concatenate paths
//  ../test/hello.html  using __dirname which reps the root directory. then it joins a folder called test and a file inside called hello.html
console.log(path.join(__dirname, "test", "hello.html"))
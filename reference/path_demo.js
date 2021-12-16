const path = require('path');


// Base file name
console.log(path.basename(__filename));


// Directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// Create path object "We can also chose the variable that we want to access"
console.log(path.parse(__filename));

// Concatenate path objects
console.log(path.join(__dirname, 'test', 'hello.html'));
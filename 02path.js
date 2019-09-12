const path = require('path');

const filename = path.basename(__filename);
console.log('filename by IIFE', __filename);
console.log('basename by path module', filename);

const pathObject = path.parse(__filename);
console.log(pathObject);

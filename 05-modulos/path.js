// modulo path

var path = require('path');

console.log(path.basename(__filename));
console.log(__filename);
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));  // Returns: 'quux.html'
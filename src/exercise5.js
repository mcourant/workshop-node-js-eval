exports.run = function(input) {
  var fs = require('fs');

  var result = 0;
  var array_number = fs.readFileSync(input).toString().split("\n");
  array_number.forEach( (element) => {
    result += parseInt(element);
  });
  return result;
};
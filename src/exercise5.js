exports.run = function(input) {
  const fs = require('fs');

  let result = 0;
  let array_number = fs.readFileSync(input).toString().split("\n");
  array_number.forEach( (element) => {
    result += parseInt(element);
  });
  return result;
};
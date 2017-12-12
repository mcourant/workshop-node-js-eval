exports.run = function(input) {
  let result = 0;
  input.forEach( (element) => {
      switch(element.operator){
          case "substract":
            result -= element.value;
            break;
          default:
              result += element.value;
      }
  });
  return result;
};
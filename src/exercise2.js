exports.run = function(input) {
  var array_input = input.split("");
  var result = ""
  array_input.forEach( (element)=>{
      if(element < 6){
        result+= element
      }
  });
  return result
};


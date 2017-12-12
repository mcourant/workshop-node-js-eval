exports.run = function(input) {
  console.log("Exercise #4");

  function myFunction(b,c){
    let result = "";
    let tmp = "";
    c.forEach( (element, index) => {
        index === b.length-1 ? tmp = "" : tmp = ", ";
        result += "The value of "+element+ " is "+ b[index]+tmp;
    });
    return result;
  }

  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(myFunction, [1, 2, 3], ["One", "Two", "Three"]);
  /** */
};

exports.run = function(input) {
    let result = "";
    let array_input = input.split("");
    array_input.forEach( (element) => {
        if(element < 6){
            result+= element;
        }
    });
    return result;
};


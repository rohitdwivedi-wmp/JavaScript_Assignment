let inputString = "JavaScript";

// finding the length of string to traverse
let length = inputString.length;

// creating the new String Variable to hold the output string
let outputString = "";

// Traverse string using indexing
for(let i=0;i<length;i++){
    let character = inputString[i];
    if(character === character.toLowerCase()){
        outputString += character.toUpperCase();
    }
    else{
        outputString += character.toLowerCase();
    }
}

// Display the result
console.log(outputString);
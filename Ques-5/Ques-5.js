let userInput = parseInt(prompt("Guess the number between 1 to 10"));

// Validate the user input is in the correct range or a valid number
while (userInput < 1 || userInput > 10 || isNaN(userInput)) {
    userInput = parseInt(prompt("Invalid input or Please guess a number between 1 and 10:"));
}

// Generate random number between 1 to 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Conditions according to the question
if(userInput == randomNumber){
    alert("Good Work");
}  
else{
    alert("Not matched"); 
}

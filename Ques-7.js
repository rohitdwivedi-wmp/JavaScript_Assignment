// Function that accepts a callback in parameter
function delayFunction(callback) {
    setTimeout(callback, 2000);  // 2 seconds or 2000 milliseconds
}

// callback function
function myCallback() {
    console.log("Callback invoked after 2 seconds");
}

// Invoke the delayFunction with myCallback as the argument
console.log("Function is being Invoked !!")
delayFunction(myCallback);

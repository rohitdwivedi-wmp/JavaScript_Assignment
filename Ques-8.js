// Function to create the shallow copy of array
function array_Clone(arr) {
    return [...arr];
}

// variables to hold the array
let array1 = [1,2,4,0];
let array2 = [1, 2, [4, 0]];

// Display the array returned from function
console.log(array_Clone(array1));
console.log(array_Clone(array2));
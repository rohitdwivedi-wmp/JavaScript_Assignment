// Get current Date
let currentDate = new Date();

let date = currentDate.getDate();

// Due to Zero based indexing
let month = currentDate.getMonth()+1;

// extracting full Year 
let year = currentDate.getFullYear();

// Display in given format
console.log(`${date}/${month}/${year}`);

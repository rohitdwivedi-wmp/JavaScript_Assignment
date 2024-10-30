let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 8, 8, 9, 2];

// array that will hold the all unique elements
let removedDuplicate = []; 

// traversing on array
arrayWithDuplicates.forEach((item)=>{
    if(!removedDuplicate.includes(item)){
        removedDuplicate.push(item);
    }
})

// Display the result
console.log(removedDuplicate);
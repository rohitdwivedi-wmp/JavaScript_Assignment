function mergeObjects(obj1, obj2) {
    // return object containing both object's properties
    return { ...obj1, ...obj2 }; 
}

// Objects
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };

// Merging objects ( here obj2 is having more priority when the key is similar )
const mergedObject = mergeObjects(obj1, obj2);

// Display Resulting Object
console.log(mergedObject);

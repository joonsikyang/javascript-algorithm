// Frequency Counter Pattern

// same function
/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 * same([1,2,3], [4,1,9]) // true
 * same([1,2,3], [1,9]) // false
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

// Naive version - Time Complexity : O(n^2)
function same(arr1, arr2) {
    let answer = true;
    if (arr1.length !== arr2.length) answer = false;
    for(let i = 0; i < arr1.length; i++) {
        let idx = arr2.indexOf(arr1[i] ** 2); // nested loop
        if(idx === -1) answer = false;
        else {
            arr2.splice(idx, 1);
        }
    }
    return answer;
}

console.log(same([1,2,1], [4,4,1])); 

// Frequency Counter Pattern
// Refactored - Time Complexity : O(n)
function same2(arr1, arr2) {
    let answer = true;
    if (arr1.length !== arr2.length) answer = false;
    
    let objOfArr1 = {};
    let objOfArr2 = {};

    // break array1 down into objects to sort the values of array
    for(let x of arr1) { 
        objOfArr1[x] = (objOfArr1[x] || 0) + 1;
    }

    // break array2 down into objects to sort the values of array
    for(let x of arr2) {
        objOfArr2[x] = (objOfArr2[x] || 0) + 1;
    }

    console.log(objOfArr1); // { '1': 2, '2': 1 }
    console.log(objOfArr2); // { '1': 1, '4': 2 }

    // compare those objects
    for(let key in objOfArr1) {
        if(!(key ** 2 in objOfArr2)) answer = false;
        if(objOfArr1[key] !== objOfArr2[key ** 2]) answer = false;
    }

    return answer;
}

console.log(same2([1,2,1], [4,4,1])); 



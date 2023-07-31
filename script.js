
// Q1 Given 2 values, return the first one if it is falsy, otherwise return the second one.

function filterOutFalsy(value1, value2) {
    return (!value1) ? value1 : value2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, 'dog'));

// Q2 Given an array, return it's length.

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([5, 0, -4, 1]));
console.log(arrLength([]));

// Q3 Given an array, return the last element in an array.

function lastElem(arr) {
    return arr[arr.length-1];
}

console.log(lastElem([3, 2, 0, 6, 2]));
console.log(lastElem(['dog', 'cat', 'ball']));
console.log(lastElem([null, 5, false]));

// Q4 Given an array, return the sum of every element.

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([100, 200, 500]));
console.log(arrSum([0, -5, -10]));

// Q5 Given a number, add up all the numbers from one to the number that is given.
// ex: An input of 4 will give you 1 + 2 + 3 + 4 which equals 10.

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum += i;
    }
    return sum;
}

console.log(progressiveSum(4));
console.log(progressiveSum(600));
console.log(progressiveSum(3));

// Q6 Given a number in seconds, return this number in mm:ss format.

function calcTime(seconds) {
    let timerMinutes =  Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
       timerMinutes = '0' + timerMinutes;
       if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds;
       }
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66));
console.log(calcTime(50));
console.log(calcTime(70));
console.log(calcTime(300));

// Q7 Given an array of numbers, return the largest number of that array.

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];        
        }                         
    }
    return max;
}

console.log(getMax([5, 100, 0]));
console.log(getMax([12, 10, -20]));
console.log(getMax([-300, -100, -200]));

// Q8 Given a string, return the reversed string.

// Q8 1st Way of Solving Using Incrementing for loop:

function reverseString(str) {
    let reversedString = '';
    for ( let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString('Belinda'));

// Q8 2nd Way of Solving Using Decrementing for loop:

function reverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; --i) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString('This is cool'));

// Q8 3rd Way of Solving Using Array Reverse Property:

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Cougar'));

// Q9 Given an array of elements, return the same length array filled with 0's.

// Q9 1st Way Using For Loop:

function convertToZeros(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; ++i) {
        newArray[i] = 0
        // newArray.push(0)  or push 0 to newArray
        // arr[i] = 0       or this if not creating new array
    }
    return newArray;
}

console.log(convertToZeros([5, 100, 0, 80]));

// Q9 2nd Way Using Array 'fill':

function convertToZeros(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZeros([4, 6, 2, 50, 89]));

// Q9 3rd Way Using Array 'map':

function convertToZeros(arr) {
    return arr.map(elem => 0);   
}

console.log(convertToZeros([4, 6, 2, 50, 89, 72, 80]));

// Q10 Given an array of fruits, if it is an apple remove it from the array.

// Q10 1st Way Using For Loop:

function removeApples(arr) {
    let noApples = []; 
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 'Apple') {
            noApples.push(arr[i]);
        }
    }
    return noApples;
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))


// Q10 2nd Way Using Array 'filter':

function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple');
}

console.log(removeApples(['Apple', 'Orange', 'Apple']));

// Q11 Given an array of values, filter out all the falsy values and only return the truthy values.

// Q11 1st Way Using For Loop:

function filterOutFalsyy(arr) {
    let truthyArr = [];
    for (let i = 0; i < arr.length; ++i) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}

console.log(filterOutFalsyy(["", [], 0, null, undefined, "0"]));


// Q11 2nd Way Using Array 'filter':

function filterOutFalsyy(arr) {
    return arr.filter(elem => !!elem === true);
}

console.log(filterOutFalsyy(["", {}, [], 0, null, undefined, "0", true, "Hello"]));

// Q12 Given an array of truthy and falsy values, return the same array of elements into its boolean value.

function convertToBoolean(arr) {
  return arr.map( elem => !!elem)
}

console.log(convertToBoolean([500, 0, 'David', "", []]))
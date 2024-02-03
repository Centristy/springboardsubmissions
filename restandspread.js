// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...args) => args.filter(val => val % 2 !== 1);


const findMin = (...args) => Math.min(...args)



const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})



const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val *2)]


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }


/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => {
    return [...arr1, arr2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {


    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (object, key) => {

    // OPTION 1
    let newObject = { ...object }
    delete newObject[key]
    return newObject;
  
}

/** Combine two objects and return a new object. */

const combine = (object1, object2) => {
    return { ...object1, ...object2 };
  }


/** Return a new object with a modified key and value. */

const update = (object, key, val) => {
 
    let newObject = { ...object }
    newObject[key] = val;
    return newObject;
}  
const express = require('express');
const app = express();
const ExpressError = require('./expressError');



app.get('/mean', function(req, res, next){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a list of numbers separated by commas. Example http://localhost:3000/mean?nums=1,2,3,4', 400)
    }

    let nums = req.query.nums.split(',');
    let ints = validateNums(nums)

    let result = {
    operation: "mean",
    result: Mean(ints)
    }

    return res.send(result);
})

app.get('/median', function(req, res, next){
    try{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a list of numbers separated by commas. Example http://localhost:3000/median?nums=1,2,3,4', 400)
    }

    let nums = req.query.nums.split(',');
    let ints = validateNums(nums)

    let result = {
    operation: "median",
    result: Median(ints)
    }

    return res.send(result);
}catch{error}{
    next(error)
}
})

app.get('/mode', function(req, res, next){
    try{
    if (!req.query.nums) {
        throw new ExpressError('You must pass a list of numbers separated by commas. Example http://localhost:3000/mode?nums=1,2,3,4', 400)
    }

    let nums = req.query.nums.split(',');

    let result = {
    operation: "mode",
    result: Mode(nums)
    }

    return res.send(result);
}
catch(err){
    next(err)
}
})




// Operations

function Mean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
    return acc + cur;
    }) / nums.length

}

function Median(nums){

    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2); // in case the number has a remainder of 1/2
    let median;

    if (nums.length % 2 === 0) {
        median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
        median = nums[middleIndex];
    }
    return median

}

function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

function Mode(arr){
    let freqCounter = createFrequencyCounter(arr);

    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
        }
    }

    return +mostFrequent;

}


function validateNums(nums){

    let ints = []

    for (let i = 0; i < nums.length; i++) {
        ints.push(Number(nums[i]))
    }

    return ints

}


/** general error handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);

    // pass the error to the next piece of middleware
    return next(err);
});

  /** general error handler */

    app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});



app.listen(3000, function() {
});


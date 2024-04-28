// add whatever parameters you deem necessary
function countPairs(arr, number) {

    let opposite = []

    for (let i = 0; i< arr.length ; i++){
    opposite.push(number-arr[i])
    }


    return(Math.floor(arr.reduce((acc, e) => (opposite.includes(e) ? 1 + acc : acc), 0)/2));

}

module.exports = countPairs




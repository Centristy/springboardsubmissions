function countZeroes(arr) {
    // add whatever parameters you deem necessary - good luck!
    let firstZero = findFirst(arr)
    if (firstZero === -1) return 0;

    return arr.length - firstZero
}


function findFirst(arr, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let middle = low + Math.floor((high - low) / 2)
    if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
        return middle;
    }else if (arr[middle] === 1) {
        return findFirst(arr, middle + 1, high)
    }
    return findFirst(arr, low, middle - 1)
    }
    return -1;
}

module.exports = countZeroes
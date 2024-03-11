function findFloor(arr, num, low = 0, high = arr.length - 1) {
    if (low > high) return -1; // if array is blank
    if (num >= arr[high]) return arr[high]; // if number is larger than the largest array number

    let mid = Math.floor((low + high) / 2) // divides the array into two


    if (arr[mid - 1] <= num && num < arr[mid]) {
        return arr[mid - 1];
    }

    if (num < arr[mid]) {
        return findFloor(arr, num, low, mid - 1);
    }

    return findFloor(arr, num, mid + 1, high)
}

module.exports = findFloor
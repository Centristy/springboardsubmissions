// add whatever parameters you deem necessary

// compare the average of any two numbers in the array to a number.
function averagePair(array, average) {

    let sum = average * 2

    let opposite = []

    for (i = 0; i < array.length; i++){
        opposite.push(sum-array[i])
    }

    let result = haveCommonItems(array,opposite)

    return result

}


function haveCommonItems(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonItems = arr2.filter(item => set1.has(item));
    return commonItems.length > 0;
}

module.exports = {averagePair, haveCommonItems}
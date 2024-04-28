// add whatever parameters you deem necessary
function sameFrequency(str1,str2) {


    let arr1 = str1.toString().split('');
    let arr2 = str2.toString().split('');

    if (arr1.length !== arr2.length){return false}


    let number = arr1.reduce((acc, e) => (arr2.includes(e) ? 1 + acc : acc), 0)


    if (number === arr1.length) return true
    else return false

}


module.exports = sameFrequency

// add whatever parameters you deem necessary
function separatePositive(arr) {

    let resultpos = []
    let resultneg = []

    

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        resultpos.push(arr[i])}
        else{
        resultneg.push(arr[i])


        }
    } 
    return resultpos.concat(resultneg)
}


module.exports = separatePositive
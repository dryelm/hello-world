function convertStringToNumber(str){
    let num = parseFloat(str)
    if (isNaN(num)){
        return false
    }
    return num
}

console.log(convertStringToNumber("fdsf"))
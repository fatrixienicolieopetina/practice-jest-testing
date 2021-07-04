function analyze(arr) {

    if(arr == undefined) {
        throw "invalid input";
    }

    arr.forEach(element => {
        if(isNaN(element)) {
            throw "invalid input";
        }    
    });
    const arrLength = arr.length;

    if(arrLength == 0) {
        throw "array is empty";
    }

    const summation = arr.reduce((a, b) => a + b, 0);
    arr.sort(function(a, b){return a - b});

    return {
        average: summation/arrLength,
        min: arr[0],
        max: arr[arrLength - 1],
        length: arrLength
    }

}

module.exports = analyze;
function reverseString(str) {
    //convert input to a string
    let origStr = str + "";
    return origStr.split("").reverse().join("");
}

module.exports = reverseString
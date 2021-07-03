function capitalize(str) {

    return typeof str === "string" ? 
            str.charAt(0).toUpperCase().concat(str.substring(1, str.length)) : str;
}

module.exports = capitalize
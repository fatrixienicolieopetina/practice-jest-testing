const caesar = function(str, numOfShiftPlaces) {
    let cipherText = '';
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);

        let isAnUpperCaseLetter = charCode >= 65 && charCode <= 90;
        let isALowerCaseLetter = charCode >= 97 && charCode <= 122;

        //determine if character is a letter
        if(isAnUpperCaseLetter || isALowerCaseLetter) {
            //do the shift
            numOfShiftPlaces = numOfShiftPlaces % 26; 
            
            let cipherLetterCharCode = charCode + numOfShiftPlaces;

            if(isAnUpperCaseLetter) {
                if(cipherLetterCharCode > 90) {
                    cipherLetterCharCode = 64 + cipherLetterCharCode - 90;
                } else if(cipherLetterCharCode < 65) {
                    cipherLetterCharCode = 90 - (64 - cipherLetterCharCode);
                }
            } else if(isALowerCaseLetter) {
                if(cipherLetterCharCode > 122) {
                    cipherLetterCharCode = 96 + cipherLetterCharCode - 122;
                } else if(cipherLetterCharCode < 97) {
                    cipherLetterCharCode = 122 - (96 - cipherLetterCharCode);
                }
            }
            cipherText = cipherText.concat(String.fromCharCode(cipherLetterCharCode));
        } else {
            cipherText = cipherText + (str.charAt(i));
        }
    }
    
    return cipherText;
}

module.exports = caesar
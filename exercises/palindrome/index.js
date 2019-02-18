// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

    
    return str.split('').every((char, i) => { 
        return char === str[str.length -i - 1] 
    })


 /*    1 Solution. 

const revered = str
                    .split('')
                    .reverse()
                    .join(''); 

    return str === revered; */

/*     for ( let character of str ){
        revered = character + revered; 
        //debugger; 
    } */
  /*    if (str === revered){
        return true; 
     } else {
        return false;  
     } */
}

module.exports = palindrome;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



function vowels(str) {
    // I - case insentive, g - all matches  
    // return an array of matches or NULL(false)
    const matches = str.match(/[a,e,i,o,u]/gi); 
    return matches ? matches.length : 0; 
}


// Tutor iterative solution with includes 
function vowelsTutorIterative(str) {
    let count = 0; 
    const checker = 'aeiou'; 
    for (let char of str.toLowerCase()){   
        if (checker.includes(char)){
            count++; 
        }
    }   
    return count; 
}


// My solution with regular exspression 
function vowelsRegExp(str) {
    return str.toLowerCase().length - str.toLowerCase().replace(/[a,e,i,o,u]/gi, '').length;  
}

// My First for loop solution 
function vowelsMySolutions(str) {

    const vowels = 'aeiou'; 
    let count = 0; 
    for (let char of str.toLowerCase()){
        if (vowels.indexOf(char) !== -1){
            count++; 
        }
    }
    return count; 
}
vowels('HEllO world'); 

module.exports = vowels;
 
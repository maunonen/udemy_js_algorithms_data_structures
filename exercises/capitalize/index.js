// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



function capitalize(str){

    let result = str[0].toUpperCase();  
    for (let i = 1 ; i < str.length ; i++){
        if (str[i - 1 ] === ' '){
            result += str[i].toUpperCase(); 
        }else {
            result += str[i]; 
        }
    }
    return result; 
}

// solution One 
function capitalizeSolutionOne(str) {
    const words = []; 
    for (let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1)); 
    }
    return words.join(' '); 
}

// my solution 

function capitalizeMySolution(str) {
    
    return str
            .split(' ')
            .map((item) => item[0].toUpperCase() + item.slice(1))
            .join(' '); 
    
 }

capitalize('hello world in a')

module.exports = capitalize;

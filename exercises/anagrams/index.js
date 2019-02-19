// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    return cleanString(stringA) === cleanString(stringB); 

}
function cleanString (str){
    return  str
                .replace(/[^\w]/g, "")
                .toLowerCase()
                .split('')
                .sort()
                .join(''); 
}

// anagrams solution 1 

function anagramsVar1(stringA, stringB) {


    // Create charMap of String amd clear string
    const buildCharMap  = (str) => {
        const charMap = {}; 
        for (let char of str.replace(/[^\w]/g, "").toLowerCase()){ 
            charMap[char]= charMap[char] + 1 || 1; 
        }
        return charMap; 
    }

    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB); 

    // get the lenght of charmap
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
        return false; 
    } 

    for (let char in aCharMap){
        if((aCharMap[char]) !== bCharMap[char] ){
            return false;   
        }
    }
    return true; 
}




function anagramsMySolution(stringA, stringB) {
    
    // reg exp using regExp 
    // ot lower case 

    // clear string of no letters characters
    const clearString = (strToClear) => {
        return strToClear
                        .replace(/[^\w]/g, "")
                        .toLowerCase(); 
    }

    // crate character maps of to string 
    // return multidimensional array. In js multidimensinal array is object. 

    const characterMap = (strMap = [])=> {
        let  strToMap = clearString(strMap);
        let arrObject = []; 
        for (let char of strToMap){
            arrObject[char] = arrObject[char] + 1 || 1; 
        }
        return arrObject; 
    } 

    // compare to string by object 

    let isEqual = true; 

    const compareMapString = (valA,valB ) => {
    

        for (let element in valA){
            if (valA[element] !== valB[element] || !valB[element] ){
                isEqual = false;
                 return isEqual; 
            } 
        } 
        return isEqual; 
    }
    const arrayLength = (arr) => {
        let count = 0; 
        // Are multi deminesional Array typeOf Object 
        // therefore for in loop 
        for (let item in arr){
            count ++; 
        }
        return count; 
    }

    // Are multi deminesional Array typeOf Object 

    const charMapA = characterMap(stringA); 
    const charMapB = characterMap(stringB); 

    return arrayLength(charMapA) >= arrayLength(charMapB) 
                                 ? compareMapString(charMapA, charMapB)
                                 : compareMapString(charMapB, charMapA);

}

console.log(anagramsMySolution("One one",  "One one c"));

module.exports = anagrams;

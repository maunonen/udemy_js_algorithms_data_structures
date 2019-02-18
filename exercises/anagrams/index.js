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
            item; 
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

console.log(anagrams("One one",  "One one c"));

module.exports = anagrams;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // creating a character map of String 

    let arrStr = {}; 
    let max = 0; 
    let maxChar = ''; 
    for (let char of str){

        arrStr[char] = arrStr[char] + 1 || 1; 

       /*  if (!arrStr[char]){
            arrStr[char] = 1; 
        } else {
            arrStr[char] ++;  
        } */

    }
    


    for (let char in arrStr){
        if (arrStr[char] > max ){
            max = arrStr[char]; 
            maxChar = char; 
        }
    }
    return maxChar; 

   /*  My variant of implemention 
   
   // convert Object to array 
    let result = Object
                    .keys(arrStr)
                    .map((key)=> {
                        return [String(key), arrStr[key]]
    }); 
    
    let maxVal = 0; 
    let maxChar = ''

    // Find the Max value of Array and return the key(Char) of element 
    for (let resItem of result){
        if (resItem[1]> maxVal){
            maxVal = resItem[1]; 
            maxChar = resItem[0]; 
        }
    }
    return  maxChar; 
    console.log(maxVal + '   '  +  maxChar); 
    console.log(result); 
    console.log(arrStr);  */

}

maxChar('Hello world ooo ');
module.exports = maxChar;

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


/*     let test1 = 12;
    debugger; 

    str.split('').reduce((reversed, character) => {
        return character + reversed
    }, ''); 
    */
  

    // REVERSE using SPLIT JOIN 
    /* let arr = str.split(''); 
    arr.reverse(); 
    return arr.join('');   */

    /*  Using for (let character of str ) Loop  */
    
 let revered = ''; 

    for ( let character of str ){
        revered = character + revered; 
        debugger; 
    }

    return revered;  
    
    
  /*  Variant with split, reverse, join
  
  return str.split('')
              .reverse()
              .join('');   */

    // 

    /*  My variant

    let arrLen = str.length;
    let i = 0; 
    let revStr = '';
    for (i; i < arrLen; i++){
        
        revStr = revStr + str[arrLen - i - 1 ]; 
        //console.log(revStr); 
    }
  return revStr; 
    */
}
reverse('abcd');  

module.exports = reverse;

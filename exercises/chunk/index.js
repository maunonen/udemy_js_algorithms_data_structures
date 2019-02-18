// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    const chunked = []; 
    let index = 0; 

    while (index < array.length ){
        chunked.push(array.slice(index, index + size)); 
        index += size; 
    }
    return chunked; 

    /*     FIRST SOLUTION

    const chunked = [] ; 

    for (let element of array){
        const last = chunked[chunked.length -1 ]; 
        if (!last || last.length === size){
            chunked.push([element]);
        } else {
            last.push(element); 
        }
    }
    return chunked;  */

   /*   MY SOLUTION

    let chunkArr = []; 
    let chunkArrIndex = 0; 
    let tmpArr = []; 
    let  tmpArrIndex = 0; 
    for (const [index, keys ]  of array.entries() ){
            tmpArr[tmpArrIndex] = keys
            tmpArrIndex++;      
          if ((index + 1) % size === 0 || array.length === ( index + 1 )){
            chunkArr[chunkArrIndex] = tmpArr; 
            tmpArr = [];  
            tmpArrIndex = 0;
            chunkArrIndex++;
        }
    }    
    return chunkArr;  */
}

let testArr = [2,34,5,5,6,6,7,7,7,7]; 
chunk(testArr, 12); 

module.exports = chunk;

// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    // implement 
    
    debugger; 
    let arrLen = arr.length; 

    for (let i = 0;  i < arr.length ; i++){  
        debugger;   
        for (let j = 0 ; j < (arr.length - i - 1); j++ ){
            let tmp = 0; 
            if (arr[j] > arr[j + 1] ){
                tmp = arr[j + 1]; 
                arr [j + 1 ] = arr [j]; 
                arr[j] = tmp; 
            }
        }
    }
    return arr; 
}


// bubbleSort(arr); 



function selectionSort(arr) {

    let  indexOfMin = 0 ; 
    debugger; 
    for (let i = 0 ; i < arr.length; i++){
        debugger; 
        indexOfMin = i ; 

        for (let j = i + 1 ;  j < arr.length ; j++  ){
            let tmp = 0 ; 
            if (arr[j] < arr[indexOfMin] ){
                indexOfMin = j; 
            }
        }

        if (indexOfMin !== i  ){
            tmp = arr[indexOfMin]; 
            arr[indexOfMin] = arr[i]; 
            arr[i] = tmp; 
        }
    }
    return arr; 
}

let arr =  [10, -30 , 97 , 0 , 5]; 
selectionSort(arr); 

function mergeSort(arr) {

    if (arr.length === 1 ){
        return arr; 
    }

    // define center of a array 

    const center = Math.floor(arr.length / 2); 
    const left = arr.slice(0, center); 
    const right = arr.slice(center); 
    return merge(mergeSort(left),mergeSort(right)) ; 


}

function merge(left, right) {
    const result = []; 

    while ( left.length && right.length ){  
        if (left[0] < right[0]){
            result.push(left.shift()); 
        } else {
            result.push(right.shift())
        }
    }
     return [...result, ...left, ...right]; 


}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

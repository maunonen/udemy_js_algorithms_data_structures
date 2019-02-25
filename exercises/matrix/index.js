// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]


// tutor Loop solution
function matrix(n){

    const results = []; 
    for (let i = 0 ; i < n ; i++){
        results.push([]); 
    }

    // declare vorder of matrix 
    let counter = 1; 
    let starttColumn = 0; 
    let endColumn = n -1; 
    let startRow = 0 ; 
    let endRow = n - 1; 
    debugger; 
    while (starttColumn <= endColumn && startRow <= endRow){
        for (let i = starttColumn; i <= endColumn; i++ ){
            results[startRow][i] = counter; 
            counter++; 
        }
        // increement start row 
        debugger;  
        startRow++;
        
        for (let i = startRow; i <=endRow; i++){
            results[i][endColumn] = counter; 
            counter++; 
        }
        endColumn--;
         
        for (let  i = endColumn ; i >= starttColumn; i-- ){
            results[endRow][i] = counter; 
            counter++; 
        }
        endRow--; 

        for (let i = endRow; i >= startRow; i--){
            results[i][starttColumn] = counter; 
            counter++; 
        }
        starttColumn++; 


    }
    return results; 

}

function matrixMySolutoins(n) {
    let j = 0; 
    let i = 0;
    let count = 0; 
    let arr = []; 
    // create the empty array of results 
    for (let ar = 0 ; ar < n ; ar++){
        arr[ar] = new Array(n); 
    }
    //debugger; 
    let leftCornerI = 0;
    let leftCornerJ = 0; 

    do{
        // Gow right till end of row 
        while (i < n ){
            count++; 
            arr[j][i] = count; 
            console.log('go right  arr ',+j+','+ i+ '   '+    arr[j][i] ); 
            i++;
            
        }
        // decremetn i and encrement J 
        i--;
        j++;
        leftCornerJ ++;

        //checking if the next cell is empty 
        if ( arr[j][i] ){
            break; 
        }

        // loop bottom till n 
        while (j < n ){            
            count++; 
            arr[j][i] = count; 
            console.log('go bottom  arr ',+j+','+ i +  '   ' +  arr[j][i] ); 
            j++;
        }
        
        // decreement j 
        j--;
        
        //checking if the next cell is not empty 
        if ( arr[j][i-1] ){
            break; 
        }

        // go Left till left corner i
        while (i >  leftCornerI){
            count++; 
            i--; 
            arr[j][i] = count; 
            console.log('go left  arr ',+j+','+ i+  '   ' +  arr[j][i] ); 
        }  
        j--;
        // checking if the naxt cell is not empty
        if ( arr[j][i] ){
            break; 
        }

        // go up till arr !== null
        while (j >= leftCornerJ ){
            count++; 
            arr[j][i]  = count; 
            console.log('go up ',+j+','+ i+ '   '+   arr[j][i] ); 
            j--; 
        } 
        leftCornerI++; 
        j++; 
        // go up till arr !== null
        if ( arr[j][i +1 ] ){
            break; 
        }

        //debugger; 
        n --; 
        i++;
    
    } while (n !== 0)
    return arr;
}

matrix (4); 
module.exports = matrix;


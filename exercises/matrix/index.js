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

function matrix(n) {
    let j = 0; 
    let i = 0;
    let count = 0; 
    let arr = []; 
    for (let ar = 0 ; ar < n ; ar++){
        arr[ar] = new Array(n); 
    }
    debugger; 
    let leftCornerI = 0;
    let leftCornerJ = 0; 
    

/*      for (let p = 0; p < 4 ; p++){
        
        for (let d = 0; d < 4 ; d++ ){
             arr[p, d] = undefined;  
             console.log(arr[p,d]);
        } 
    }  */

    do{
        // Gow right till end of row 
        

        while (i < n ){
            
            count++; 
            arr[j][i] = count; 
            console.log('go right  arr ',+j+','+ i+ '   '+    arr[j][i] ); 
            i++;
            
        }
        
        i--;
        j++;
        leftCornerJ ++;

        if ( arr[j][i] ){
            break; 
        }

        
        while (j < n ){
            
            count++; 
            arr[j][i] = count; 
            console.log('go bottom  arr ',+j+','+ i +  '   ' +  arr[j][i] ); 
            j++;
        }
         
        j--;
        

        if ( arr[j][i-1] ){
            break; 
        }

        //count--;
        
        
        // go Left till 0 
        //console.log(i, leftCornerI); 
        
        
        while (i >  leftCornerI){
            count++; 
            i--; 
            arr[j][i] = count; 
            console.log('go left  arr ',+j+','+ i+  '   ' +  arr[j][i] ); 
            
        }  
        j--;

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
        

        if ( arr[j][i +1 ] ){
            break; 
        }


        debugger; 
        n --; 
        i++;
        //console.log(arr[j, i]); 
    } while (n !== 0)
    return arr;
}

matrix (4); 
module.exports = matrix;

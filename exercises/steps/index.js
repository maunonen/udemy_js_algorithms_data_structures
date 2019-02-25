// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    
    if (n === row ){
        return ; 
    }
    if (n === stair.length) {
        console.log(stair); 
        return steps(n , row +1 ); 
    }

    
    if (stair.length <= row ){
        stair += '#'; 
    } else {
        stair += ' ';  
    }
    //const add = stair.length <= row ? '#' : ' '; 
    //steps(n , row, stair +add );  

    steps(n , row, stair);  
}

// MY SOLUTION RECURSION

function steps(n) {

   
    
    let strRow = '' ; 
    let strSpace = ''; 

    const printTable = (row) => {
        if (row === 0){ return }
        printRow(n - row  + 1 ); 
        printSpace(row - 1); 
        console.log(strRow + strSpace ); 
        strSpace = ''; 
        strRow = ''; 
        printTable(row - 1);
    }


    
    const printSpace = (num) => {
        if (num === 0 ){ return strSpace; } 
        strSpace = strSpace +  ' '; 
        printSpace(num - 1); 
    }

    const printRow = (symbol ) => {
        if (symbol === 0) { return strRow;}
        strRow = strRow +  '#'; 
        printRow(symbol - 1);
    } 
    printTable(n);  
}



// solution  FOR LOOOP from tutor 
function stepsForLoop(n) {

    for (let row = 0; row < n; row ++){
        let stair = '';
        
        for (let column = 0; column < n ; column ++){
             if (column <= row ){
                 stair += '#'; 
             } else {
                 stair += ' '; 
             }
        }
        console.log(stair); 
    }
}

function stepsMySolution(n) {

    const printSymbol = (num, symbol=' ')=> {
        let charSymbol = ''; 
        for ( let i = 0; i < num ; i++){
            charSymbol = charSymbol + symbol; 
        }
        return charSymbol; 
    }

    for(let i = 0 ; i < n ; i++){
        console.log(printSymbol(i+1, '#') + printSymbol(n - (i+1)));  
    }   
}


steps(5); 

module.exports = steps;

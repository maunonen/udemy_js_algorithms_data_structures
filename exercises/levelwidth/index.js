// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth (root){

    const arr = [root , 's']; 
    const counters = [0]; 

    while (arr.length > 1){
        const node  = arr.shift(); 
        if (node === 's'){
            counters.push(0);  
            arr.push('s'); 
        } else {
            arr.push(...node.children); 
            counters [counters.length -1 ] ++; 
        }
    }
    return counters; 

}


// Own solution 
function levelWidthOwn(root) {
    debugger; 
    const counters = [] ; 
    let counter = 0; 
    let arr = [root]; 
    let index = 0; 
    
    arr.push('s'); 

    let previous = '';  
    while (arr.length){    
        const node = arr.shift(); 
        if (previous === node && previous === 's'){
            return counters; 
        }
        if (node === 's'){
            counters[index] = counter; 
            index++;  
            arr.push('s');
            counter = 0;  
        } else {
            if (node.children.length !== 0){
                arr.push(...node.children); 
            }
            counter ++;  
        }
        previous = node; 
    }
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
levelWidth(root); 

module.exports = levelWidth;

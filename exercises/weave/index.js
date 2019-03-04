// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');



// tutor solution 
function weave (sourceOne, sourceTwo){

    const q = new Queue(); 
    while (sourceOne.peek() || sourceTwo.peek()){
        if (sourceOne.peek()){
            q.add(sourceOne.remove()); 
        }
        if (sourceTwo.peek()){
            q.add(sourceTwo.remove()); 
        }
    }
    return q; 
}

// Own solution
function weaveOwnSolution(sourceOne, sourceTwo) {
    
    const combinedQueue = new Queue(); 

    while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined) {
        if (sourceOne.peek() !== undefined) {
            combinedQueue.add(sourceOne.peek()); 
            sourceOne.remove(); 
        }
        if (sourceTwo.peek() !== undefined){
            combinedQueue.add(sourceTwo.peek()); 
            sourceTwo.remove(); 
        }
    }
    return combinedQueue;
}


const test1 = new Queue(); 
test1.add(1); 
test1.add(12); 
test1.add(13); 

const test2 = new Queue(); 
test2.add('He'); 
test2.add('Lo'); 
test2.add('Wor'); 
test2.add('Ld'); 

weave(test1, test2); 
//console.log(test.peek()); 

module.exports = weave;

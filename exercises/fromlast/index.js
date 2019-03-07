// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'


const L = require('./linkedlist');


// own solution 
function fromLast(list, n) {

    // point to first element 

    let slow = list.head ; 
    let fast = list.head; 

    debugger; 
    
    while (n > 0 ){      
        fast = fast.next; 
        n--; 
    }; 
    while (fast.next){
        slow = slow.next; 
        fast = fast.next; 
    }
    return slow; 
}

const List = L.LinkedList;
const list = new List(); 
list.insertFirst('a'); 
list.insertFirst('b'); 
list.insertFirst('d'); 
list.insertFirst('f'); 
list.insertFirst('e'); 
fromLast(list, 2); 

module.exports = fromLast;

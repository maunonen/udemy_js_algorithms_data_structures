// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1


//   Own solution

class Stack {

    constructor(){
        this.data = [];

    }

    push (item) {
        this.data.push(item); 
    }
    pop (){
        return this.data.pop(); 
    }
    peek (){
        return this.data[this.data.length-1]; 
    }
}

const st = new Stack(); 
debugger; 
st.push(2);
st.push(3);
st.push(5);
let peek1 = st.peek(); 

st.pop(); 
peek1 = st.peek(); 
st.push(6); 

module.exports = Stack;

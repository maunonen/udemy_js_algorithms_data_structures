// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// Tutor solutuion  

class Queue {
    constructor (){
        this.first = new Stack(); 
        this.second = new Stack(); 
    }

    add(record) {
        this.first.push(record); 
    }

    remove(){
        while(this.first.peek()){
            this.second.push(this.first.pop()); 
        }
        const record = this.second.pop(); 
        while (this.second.peek()){
            this.first.push(this.second.pop()); 
        }
        return record; 
    }

    peek(){
        while(this.first.peek()){
            this.second.push(this.first.pop()); 
        }
        const record = this.second.peek(); 
        while (this.second.peek()){
            this.first.push(this.second.pop()); 
        } 
        return record;

    }
}

// own solution 
class QueueOwnSolution {
    constructor(){
        this.firstStack = new Stack(); 
        this.secondStack = new Stack(); 
    }
    
    add (item){
        debugger; 
        while(this.secondStack.peek()){
            this.firstStack.push(this.secondStack.pop())
        }
        this.firstStack.push(item); 
        
    }
    remove (){
        while (this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());

        }
        return this.secondStack.pop(); 
    }
    peek(){
        while (this.firstStack.peek()){
            this.secondStack.push(this.firstStack.pop());
        }
        return this.secondStack.peek(); 
    }
}

const test = new Queue(); 

test.add(1); 
test.add(2); 
test.add(3); 
test.add(4); 
test.remove(); 
test.peek(); 
test.add(6);
test.peek();

module.exports = Queue;

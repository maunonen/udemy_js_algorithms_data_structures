// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data; 
        this.left = null; 
        this.right = null; 
    }
    insert (data){
        // go right 
        if (data < this.data && this.left ){
            this.left.insert(data);   
        } else if (data < this.data ){
            this.left = new Node(data); 
        } else if (data > this.data && this.right ){
            this.right.insert(data); 
        } else if  (data > this.data){
            this.right =  new Node (data); 
        }
    }

    contains(data){
        if (this.data === data){
            return this ; 
        }
        if (this.data  < data && this.right ){
            return this.right.contains(data);  
        } else if (this.data > data && this.left ){
            return this.left.contains(data); 
        }
        return null; 
    }

    // own solution doesn't work something goes wrong 
    containsOwn (data){
        debugger; 
        if (data === this.data){
            return this; 
        } 
        if (data > this.data && this.right ){
            return this.right.contains(data); 
        } else if (data > this.data) {
            return null; 
        } else if (data < this.data && this.left ){
            return this.left.contains(data); 
        }
        else if (data < this.data){
            return null; 
        }
    }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);
node.contains(-5); 




module.exports = Node;

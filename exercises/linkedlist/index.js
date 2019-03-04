// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

    constructor (data, next = null){
        this.data = data; 
        this.next = next;
        
    }
}

class LinkedList {
    
    constructor(){
        this.head = null; 
        
    }
    insertFirst(data){
        // we should pass reference to head when we create the Node 
        const node = new Node(data, this.head);
        // this.head = new Node(data, this.head);
        this.head = node; 

    }

    // own solution 
    size(){
        let counter = 0; 
        let tmp = this.head; 
        
        while(tmp){
            counter++;
            tmp = tmp.next;
        }
        return counter; 
    }

    getFirst(){
        return this.head;
    }
    getLast(){

        
        if (!this.head){
            return null;
        }
        let tmp = this.head; 
        let last;

        while(tmp){
            if (!tmp.next){
                return tmp; 
            }
            tmp = tmp.next;
        }
        
        // ouw solution 

        /*  while(tmp){
            last = tmp; 
            tmp = tmp.next;
        } */
        return last; 
    }

    clear (){
        this.head = null; 
    }

    removeFirst(){
        if (!this.head){
            return; 
        }
        // explicit solution 

        /* if (!this.head.next){
            return this.head = null; 
        } */
        return this.head = this.head.next; 
    }
    removeLast(){
            
            if (!this.head){
                return null;
            }
            if(!this.head.next){    
                 this.head = null; 
                 return; 
            }
            
            let tmp = this.head; 
            let previous;
    
            while(tmp.next){
                previous = tmp; 
                tmp = tmp.next;
            }
            previous.next = null; 
            return previous;  
    }
    insertLast(data){

        const last = this.getLast(); 
        if (last){
            last.next = new Node (data); 
        } else {
            this.head = new Node(data);  
        }

        // ouw solution 
        //debugger; 
   /*      if (!this.getLast()){
            return this.insertFirst(data); 
        }
        let last = this.getLast(); 

        const node = new Node(data);
        return last.next = node;   */   
    } 

    getAt(index){

        debugger; 
        let counter = 0; 
        let tmp = this.head; 


        // this is unnecessary cause we return null after while loop   
     /*    if (!this.head){
            return null; 
        } */
        // own solution of checking index 
     /*    if (index > this.size || index < 0){
            return null; 
        } */
        
        while(tmp){
            if (counter === index){
                return tmp; 
            }
            counter++;
            tmp = tmp.next;
        }
        return null; 
    }

    removeAt(index) {

        // own solution 
        if (!this.head ){
            return null; 
        }
        if (this.head.next === null){
            return this.head = null; 
        } else if (index === 0){
            return this.head = this.head.next; 
        }
        else {
            let previous = this.getAt(index - 1); 
            previous.next = this.getAt(index + 1); 
        }        
    }
}



const nodeOne = new Node(5); 
const list =  new LinkedList(); 
list.head = nodeOne; 
list.insertFirst(4); 
list.insertFirst(10); 
list.insertFirst(15); 
list.getAt(2); 
list.removeLast(); 
list.getLast(); 
debugger; 
list.insertLast(89); 
list.size();  



module.exports = { Node, LinkedList };

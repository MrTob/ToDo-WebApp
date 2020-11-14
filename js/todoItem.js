
export default class ToDoItem{
  
    constructor(){
        this.id = null;
        this.item = null;
    }

 
    getId(){
        return this.id
    }

  
    setId(id){
        this.id = id;
    }

 
    getItem(){
        return this.item;
    }


    setItem(item){
        this.item = item;
    }
}
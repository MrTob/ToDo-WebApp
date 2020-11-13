export default class ToDoList{
    constructor(){
        this.list=[];
    }

    getList(){
        return this.list;
    }

    clearList(){
        this.list =[];
    }

    addItem(item){
        this.list.push(item);
    }

    removeItem(id){
        const list = this.list;
        for(var i=0; i < list.length;i++){
            if(list[i].id == id){
                list.splice(i,1);
                break;
            }
        }
    }
}
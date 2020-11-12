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

    adItem(item){
        this.list.push(item);
    }

    removeItem(id){
        const list = this.list;
        for(var i=0; i < list.length;i++){
            if(list[i]._id == id){
                list.splice(i,1);
                break;
            }
        }
    }
}
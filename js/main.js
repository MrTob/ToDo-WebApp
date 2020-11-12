import ToDoList from "./todolist.js"
import ToDoItem from "./todoItem.js"

const todoList = new ToDoList();

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = ()=>{
    const todoEntry = document.getElementById("todoEntryForm");
    todoEntry.addEventListener("submit", (event)=>{
        event.preventDefault();
        precessSub();
    })
    refreshPage();
}

const refreshPage = ()=>{
    clearListDisplay();
    renderList();
    clearTodoEntry();
    setFocusOnTodoEntry();
}

const clearListDisplay = ()=>{
    const parent = document.getElementById("listItems");
    delContents(parent);
}

const delContents =(parentElem)=>{
    let child = parentElem.lastElementChild;
    while(child){
        parentElem.removeChild(child);
        child = parentElem.lastElementChild;
    }
}

const renderList = () =>{
    const list = todoList.getList();
    list.forEach(item => {
        buildListItem(item);
    });
};

const buildListItem = (item) =>{
    const div = document.createElement("div");
    div.className = "item"
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox"
    checkBox.id = item.getId()
    checkBox.tabIndex =0;
    clickListenerCheckbox(checkBox)
    const label = document.createElement("label");
    label.htmlFor= item.getId();
    label.textContent = item.getItem();
    div.appendChild(checkBox);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const clickListenerCheckbox = (checkBox) =>{
    checkBox.addEventListener("click", (event)=>{
        todoList.removeItem(checkBox.id);
        setTimeout(() =>{
            refreshPage();
        },1000)
    })
};

const clearTodoEntry=() =>{
    document.getElementById("newTodo").value = '';
};

const setFocusOnTodoEntry=()=>{
    document.getElementById("newTodo").focus();
};

const precessSub =()=>{
    const newTodoText = getNewTodo();
    if(!newTodoText.length)return;

    const nextTodoId = calcNextTodoId();
    const todo = createnNewTodo(nextTodoId,newTodoText);
    todoList.adItem(todo);
    refreshPage();

}

const getNewTodo=()=>{
    return document.getElementById("newTodo").value.trim();
}

const calcNextTodoId=()=>{
    let nextTodoId = 1;
    const list = todoList.getList();
    if(list.length >0){
        nextTodoId = list[list.length-1].getId() +1;
    }
    return nextTodoId;
}

const createnNewTodo=(todoId, todoText)=>{
    const todo = new ToDoItem();
    todo.setId(todoId);
    todo.setItem(todoText);
    return todo;
}

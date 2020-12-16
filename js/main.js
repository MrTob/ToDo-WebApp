import ToDoList from "./todolist.js"
import ToDoItem from "./todoItem.js"

const todoList = new ToDoList();

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
});

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope:',  registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed:', error);
  });
}

const initApp = ()=>{
    const todoEntry = document.getElementById("todoEntryForm");
    todoEntry.addEventListener("submit", (event)=>{
        event.preventDefault();
        precessSub();
    });

    const clearTodos = document.getElementById("clearTodos");
    clearTodos.addEventListener("click", (event)=>{
        const list = todoList.getList();
        if(list.length){
            const confirmed = confirm("Are you sure to clear all?");
            if(confirmed){
                todoList.clearList();
                updatePersistentData(todoList.getList());
                refreshPage();
            }
        }
    });
    loadListObject();
    refreshPage();
};

const loadListObject = () =>{
    const storedList = localStorage.getItem("todoList");
    if(typeof storedList !== "string")return;
    const parseList = JSON.parse(storedList)
    parseList.forEach(itemObj => {
        const newTodoItem = createnNewTodo(itemObj.id,itemObj.item);
        todoList.addItem(newTodoItem);
    });
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
    label.textContent = atob(item.getItem());
    div.appendChild(checkBox);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
};

const clickListenerCheckbox = (checkBox) =>{
    checkBox.addEventListener("click", (event)=>{
        todoList.removeItem(checkBox.id);
        updatePersistentData(todoList.getList());
        setTimeout(() =>{
            refreshPage();
        },1000)
    })
};

const updatePersistentData =(listArr)=>{
    localStorage.setItem("todoList", JSON.stringify(listArr));
}

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
    const todo = createnNewTodo(nextTodoId,btoa(newTodoText));
    todoList.addItem(todo);
    updatePersistentData(todoList.getList());
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

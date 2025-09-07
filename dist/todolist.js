const todoInput = document.querySelector(".todo-value");
const addTodoBtn = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
const iconBin = document.querySelector("icon");
// todo list 
const ToDo = [];
// add new todo (Function)
const addTodoBtnFunction = () => {
    const NewToDo = { id: ToDo.length + 1, text: todoInput.value };
    if (NewToDo.text !== "") {
        ToDo.push(NewToDo);
    }
    todoList.innerHTML = ToDo.map((thisToDo) => `<li class="todoList">
            ${thisToDo.text}
            <span onclick="deleteToDo(${thisToDo.id})" class="icon"><i class="fas fa-trash"></i></span>
        </li>`).join('');
    todoInput.value = "";
    todoInput.focus();
    setLocalStorage();
};
// set localStorage
const setLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(ToDo));
};
//push local storage to DOM
window.addEventListener("load", () => {
    ToDo.length = 0;
    ToDo.push(...JSON.parse(localStorage.getItem("todos")));
    addTodoBtnFunction();
});
// add new todo (Event)
addTodoBtn.addEventListener("click", addTodoBtnFunction);
// add new todo with keyDown Event
window.addEventListener('keydown', (e) => {
    e.key === "Enter" ? addTodoBtnFunction() : null;
});
// delete todo
const deleteToDo = (ToDoId) => {
    const filterToDo = ToDo.filter((item) => {
        return item.id !== ToDoId;
    });
    ToDo.length = 0;
    ToDo.push(...filterToDo);
    addTodoBtnFunction();
};
// clear all ToDos
clearTodos.addEventListener("click", () => {
    ToDo.length = 0;
    addTodoBtnFunction();
});
//# sourceMappingURL=todolist.js.map
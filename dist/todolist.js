const todoInput = document.querySelector(".todo-value");
const addTodoBtn = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
// todo list
const ToDo = [];
const addTodoBtnFunction = () => {
    const NewToDo = { id: ToDo.length + 1, text: todoInput.value };
    if (NewToDo.text !== "") {
        ToDo.push(NewToDo);
    }
    todoList.innerHTML = ToDo.map(thisTodo => `<li class="todoList">
        ${thisTodo.text}
        <span class="icon"><i class="fas fa-trash"></i></span>
        </li>`).join('');
    todoInput.value = "";
    todoInput.focus();
};
addTodoBtn.addEventListener("click", addTodoBtnFunction);
// clear all ToDos
clearTodos.addEventListener("click", () => {
    ToDo.length = 0;
    addTodoBtnFunction();
});
//# sourceMappingURL=todolist.js.map
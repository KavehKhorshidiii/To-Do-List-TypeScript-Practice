const todoInput = document.querySelector(".todo-value");
const addTodoBtn = document.querySelector(".add-todo");
const clearTodos = document.querySelector(".clear-todos");
const todoList = document.querySelector(".todoList");
const ToDo = [];
addTodoBtn.addEventListener("click", () => {
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
});
//# sourceMappingURL=todolist.js.map
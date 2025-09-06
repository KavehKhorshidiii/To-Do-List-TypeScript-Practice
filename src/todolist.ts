const todoInput = document.querySelector(".todo-value") as HTMLInputElement
const addTodoBtn = document.querySelector(".add-todo") as HTMLButtonElement
const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement
const todoList = document.querySelector(".todoList") as HTMLUListElement


// interface
interface ToDoType { 
    id: number;
    text: string;
}

// todo list
const ToDo: ToDoType[] = []


addTodoBtn.addEventListener("click", () => {

    const NewToDo:ToDoType = {id: ToDo.length + 1  ,  text:todoInput.value}

    if(NewToDo.text !== ""){ ToDo.push(NewToDo) }
    
    todoList.innerHTML = ToDo.map( thisTodo =>
        `<li class="todoList">
        ${thisTodo.text}
        <span class="icon"><i class="fas fa-trash"></i></span>
        </li>`
    ).join('')

    todoInput.value = ""
    todoInput.focus()
    
})


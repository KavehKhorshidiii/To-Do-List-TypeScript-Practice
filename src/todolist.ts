const todoInput = document.querySelector(".todo-value") as HTMLInputElement
const addTodoBtn = document.querySelector(".add-todo") as HTMLButtonElement
const clearTodos = document.querySelector(".clear-todos") as HTMLButtonElement
const todoList = document.querySelector(".todoList") as HTMLUListElement
const iconBin = document.querySelector("icon") as HTMLButtonElement


// interface
interface ToDoType {
    id: number;
    text: string;
}

// todo list 
const ToDo: ToDoType[] = []

// add new todo (Function)
const addTodoBtnFunction = () => {
    const NewToDo: ToDoType = { id: ToDo.length + 1, text: todoInput.value }

    if (NewToDo.text !== "") { ToDo.push(NewToDo) }

    todoList.innerHTML = ToDo.map(thisToDo =>
        `<li class="todoList">
            ${thisToDo.text}
            <span onclick="deleteToDo(${thisToDo.id})" class="icon"><i class="fas fa-trash"></i></span>
        </li>`
    ).join('')

    todoInput.value = ""
    todoInput.focus()
}

// add new todo (Event)
addTodoBtn.addEventListener("click", addTodoBtnFunction)

// delete todo
const deleteToDo = (ToDoId: number) => {

    const filterToDo = ToDo.filter((item:ToDoType) => {
        return item.id !== ToDoId   
    })

    ToDo.length = 0
    ToDo.push(...filterToDo)
    addTodoBtnFunction()
}

// clear all ToDos
clearTodos.addEventListener("click", () => {
    ToDo.length = 0
    addTodoBtnFunction()
})

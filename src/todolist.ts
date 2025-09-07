const todoInput = document.querySelector<HTMLInputElement>(".todo-value")!
const addTodoBtn = document.querySelector<HTMLButtonElement>(".add-todo")!
const clearTodos = document.querySelector<HTMLButtonElement>(".clear-todos")!
const todoList = document.querySelector<HTMLUListElement>(".todoList")!
const iconBin = document.querySelector<HTMLButtonElement>("icon")!



// interface
interface ToDoType {
    id: number;
    text: string;
}

// todo list 
const ToDo: ToDoType[] = []

// add new todo (Function)
const addTodoBtnFunction = ():void => {
    const NewToDo: ToDoType = { id: ToDo.length + 1, text: todoInput.value }

    if (NewToDo.text !== "") { ToDo.push(NewToDo) }

    todoList.innerHTML = ToDo.map((thisToDo:ToDoType) =>
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
const deleteToDo = (ToDoId: number):void => {

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

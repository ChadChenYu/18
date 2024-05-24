let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function addTodo() {
    let todo = document.getElementById('todo').value;
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayTodos();
}

function displayTodos() {
    let todoContainer = document.getElementById('todoContainer');
    todoContainer.innerHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        todoContainer.innerHTML += '<li>' + todoList[i] + '</li>';
    }
}

displayTodos();

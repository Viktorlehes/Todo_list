let todoItems = [];

function writetodo(array) {
    const node = document.createElement("li");

    while (node.firstChild) {
       node.removeChild(node.first);
    }

    array.forEach(todo => {
        const tasks = document.querySelector('#tasks');
        node.appendChild(document.createTextNode(todo.text));
        tasks.appendChild(node);
        console.log(node.firstChild.data)
        let btn = document.createElement('button');
        btn.type = "submit"
        btn.id = "remove"
        document.
    })
}

function addTodo(text) {
    const todo = {
    text,
    checked: false,
    id:  Date.now()
    };

    todoItems.push(todo);
    console.log(todoItems)

    if (todoItems !== []){
        writetodo(todoItems)
    }
}

document.querySelector('form').onsubmit = function(event){
    event.preventDefault()
    const input = document.getElementById('input_field')
    if(input.value.length == 0){
        alert("Please Enter a Task")
    } else {
        const text = document.createTextNode(input.value).data
        addTodo(text)
        input.value = ''
        input.focus()
    }
}
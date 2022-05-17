let todoItems = [];

function writetodo(array) {
    const node = document.createElement("li");

    array.forEach((todo, index) => {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        console.log(index)
        const tasks = document.querySelector('#tasks');
        node.appendChild(document.createTextNode(todo.text));
        tasks.appendChild(node);
        //add button
        let btn = document.createElement('button');
        btn.innerHTML = "Done!";
        btn.type = "submit";
        btn.className = 'remove'
        btn.id = Date.now();

        btn.addEventListener('click', () => {
            console.log(todo)
            array.splice(index)
            return array
        })
        
        if (array[index].button == false){
            tasks.insertAdjacentElement("beforeend", btn)
            array[index].button = (true)
        }   
    })
}

function addTodo(text) {
    const todo = {
    text,
    checked: false,
    id:  Date.now(),
    button: false
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
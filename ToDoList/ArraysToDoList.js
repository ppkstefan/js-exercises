const Todo = [];

function selector() {
    const inputName = document.querySelector('.name'); // Corrected class name
    const name = inputName.value;
    const inputDate = document.querySelector('.date');
    const date = inputDate.value;
    
    // Check if both name and date are entered
    if (name && date) {
        Todo.push({ name, date }); // Push an object containing name and date
        inputName.value = ''; // Clear input fields after adding
        inputDate.value = '';
        display();
    } else {
        Todo.push({ name }); // Push an object containing name and date
        inputName.value = ''; // Clear input fields after adding
        display();
    }
}

function display() {
    let todoHTML = '';
    for (let i = 0; i < Todo.length; i++) {
        let todo = Todo[i];
        if(todo.date)
        {let html = `
            <div>${todo.name}</div>
            <div> ${todo.date}</div>
            <button onclick="removeTask(${i})">Delete</button> `; 
            todoHTML += html;
        }
        else
        {
            todo.date=' no date  ';
            let html = `
            <div>${todo.name}</div> 
            <div>${todo.date}</div>
            <button onclick="removeTask(${i})">Delete</button> `; 
            todoHTML += html;
        }
       
    }
    document.querySelector('.list').innerHTML = todoHTML;
}

function removeTask(index) {
    Todo.splice(index, 1);
    display();
}

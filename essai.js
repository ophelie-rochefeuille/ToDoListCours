
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('input');
const buttonValidate = document.querySelector('button');

console.log (form, input);

const todos = [
    {
        text: "je suis une todo",
        done: false
    },
    {
        text: "faire du Javascript",
        done: false
    },
]

const tasks =[ ]; 


    buttonValidate.addEventListener('click', (event) => {
        let value=  input.value;
        value = ''; 
        tasks.push(input.value)
        event.preventDefault();
    }  )

console.log(tasks)


console.log(todos)



const displayTodo = () => {
    form.addEventListener('submit', (event) => {
    event.preventDefault
    const value = input.value;
    value = '';
    addTodo(value);
});
    const todoNode = todos.map((todo, index) => {
return creatTodoElement (todo, index);
    })
    ul.innerHTML = '';
    ul.append (...todoNode)
    console.log(ul)    
    essai = document.createElement('p');
    document.body.append(essai)
    essai.innerHTML = todoNode.text;
}





const addTodo = (text) => {
    todos.push({
        text,
        done: false
    });
    displayTodo();
} 



const deleteTodo = (index) => {
todos.splice(index, 1);
displayTodo();
}



const toggleTodo = index => {
    todos[index].done = !todos[index].done;
    displayTodo();
}



const creatTodoElement = (todo, index)=> {
    const li = document.createElement('li');
    const buttonDelete = document.createElement ('button');
    buttonDelete.innerHTML = 'Supprimer';
    buttonDelete.addEventListener ('click', (event) => { deleteTodo(index);
    })
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : '' }"></span>
    <p> ${ todo.text }</p>
     `;
     li.addEventListener('click', () => {
         toggleTodo(index)
     })
     li.appendChild (buttonDelete); 
     console.log(li);
     return li;
    
};

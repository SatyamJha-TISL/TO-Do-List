//Selectors//
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');
// Event Listeners //
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filter.addEventListener('click',filterit);


// Function //

function addTodo (event) {
    event.preventDefault();
    // create div 
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('todo');
  // create list item
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value ;
     newTodo.classList.add('todo-item');

     todoDiv.appendChild(newTodo);

     // check mark button //
     const completedButton = document.createElement('button');
     completedButton.innerHTML= '<i class="fas fa-check"></i>' ;
     completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

 // check trash button //
 const trashButton = document.createElement('button');
 trashButton.innerHTML= '<i class="fas fa-trash"></i>' ;
 trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

// append the div to the ul 
todoList.appendChild(todoDiv);

// Clear todo input value 
todoInput.value = "" ;
}

// function to delete and check

//1. Delete
function deleteCheck(e) {
    const item = e.target ;
    if (item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement ;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove() ;

        });    
    }

    // 2. check mark 
    if (item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement ;
        todo.classList.toggle ("completed") ;
    }
}


// filtering according to all , completed , incomplete //

function filterit(e) {
    const listitems = todoList.childNodes ;
     listitems.forEach(function (listitem) {
             switch (e.target.value) {

                 case "all":
                     listitem.style.display = "flex";
                     break;

                 case "completed":
                     if (listitem.classList.contains("completed")) {
                         listitem.style.display = "flex";
                     } else {
                         listitem.style.display = "none";
                     }

                     break;

                 case " Incomplete":
                     if (!listitem.classList.contains("completed")) {
                         listitem.style.display = "flex";
                     } else {
                         listitem.style.display = "none" ;
                     }
                     break;
             }
         }) ;
    }

const todoInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => {
  renderTask(task);
});

addTaskButton.addEventListener('click',()=>{
  const taskText = todoInput.value.trim();
  if(taskText === "") return;

const newTask = {
  id : Date.now(),
  text : taskText,
  completed : false
}

tasks.push(newTask);
saveTasks();
renderTask(newTask);
todoInput.value = "";
});

function saveTasks(){
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

function renderTask(task) {
  const li = document.createElement('li');
  li.setAttribute('data-id',task.id);
  li.className = 'bg-gray-300 flex justify-between items-center p-2 rounded-lg mb-3 cursor-pointer';
  if (task.completed) {
    li.classList.add('line-through');
  }
  li.innerHTML =`
    <span>${task.text}</span>
    <button class="bg-black text-white px-4 py-0.5">delete</button>
  `;

  li.addEventListener('click',(e)=>{
    if(e.target.tagName === "BUTTON") return;
    task.completed = !task.completed;
    li.classList.toggle("line-through");
    saveTasks();
  })
  
  li.querySelector('button').addEventListener('click',(e)=>{
    e.stopPropagation(); //preventing bubbling
    tasks = tasks.filter(t => t.id !== task.id);
    li.remove();
    saveTasks();
  })

  todoList.appendChild(li);
}

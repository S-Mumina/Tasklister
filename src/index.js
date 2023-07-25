document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById('tasks');
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');

  // Add event listener to the form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = ''; // Clear the input field
  });

  // Function to add a new task
  function addTask(taskDescription) {
    const newTask = document.createElement('li');
    newTask.innerText = taskDescription;

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-times', 'delete-icon');

    newTask.appendChild(deleteIcon);
    taskList.appendChild(newTask);
  }

  // Add event listener to dynamically added delete icons
  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-icon')) {
      const taskItem = e.target.parentNode; // Get the parent <li> element
      taskItem.remove(); // Remove the clicked task
    }
  });

});

   
  








;



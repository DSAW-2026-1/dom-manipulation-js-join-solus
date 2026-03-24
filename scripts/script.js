const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

/**
 * Function to create and add a new task to the list
 */
function createTodo() {
    const taskValue = input.value.trim();

    // Prevent adding empty tasks
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the list item (LI) element
    const li = document.createElement('li');
    li.classList.add('todo-item');

    // Set internal structure of the task
    li.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
    <input type="checkbox" class="task-check">
    <span>${taskValue}</span>
    </div>
    <button class="delete-btn">Delete</button>
    `;

    /**
     * Feature: Toggle task completion
     * Adds/Removes the 'completed' class when checkbox is clicked
     */
    li.querySelector('.task-check').addEventListener('change', (e) => {
        if (e.target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    /**
     * Feature: Delete task
     * Removes the element from the DOM
     */
    li.querySelector('.delete-btn').onclick = function() {
        li.remove();
    };

    // Append the new task to the output section (the UL)
    todoList.appendChild(li);

    // Clear the input field and refocus for the next task
    input.value = "";
    input.focus();
}

/**
 * Event Listeners
 */

// Trigger creation when clicking the 'Add' button
addBtn.addEventListener('click', createTodo);

// Trigger creation when pressing 'Enter' inside the input field
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        createTodo();
    }
});

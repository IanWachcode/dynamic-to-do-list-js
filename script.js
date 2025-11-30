// Run code only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // 1. Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 2. Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and trim spaces

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> element
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li
        li.appendChild(removeBtn);

        // Append li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // 3. Add click listener to Add Task button
    addButton.addEventListener("click", addTask);

    // 4. Add Enter key support
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

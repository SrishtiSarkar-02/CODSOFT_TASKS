const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        const listItem = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;

        if (task.completed) {
            taskSpan.classList.add("completed");
        }

        const completeButton = document.createElement("button");
        completeButton.textContent = "✓";
        completeButton.classList.add("complete-btn");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            displayTasks();
        });

        listItem.appendChild(taskSpan);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
});

displayTasks();

document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        document.getElementById("taskList").appendChild(li);
        taskInput.value = ""; // Clear the input field
    } else {
        alert("Please enter a task.");
    }
});
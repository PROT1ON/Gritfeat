const tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    tasks.push(taskText);
    taskInput.value = "";
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function moveUp(index) {
    if (index > 0) {
        [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
        renderTasks();
    }
}

function moveDown(index) {
    if (index < tasks.length - 1) {
        [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
        renderTasks();
    }
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(index);
        const upButton = document.createElement("button");
        upButton.textContent = "Up";
        upButton.onclick = () => moveUp(index);
        const downButton = document.createElement("button");
        downButton.textContent = "Down";
        downButton.onclick = () => moveDown(index);
        li.appendChild(deleteButton);
        li.appendChild(upButton);
        li.appendChild(downButton);
        taskList.appendChild(li);
    });
}
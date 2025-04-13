// js/main.js
import { TaskStorage } from './modules/data.js';
import { createTaskElement, clearInput } from './modules/utils.js';

const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');

export function initDashboard() {
    renderTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            TaskStorage.addTask(task);
            renderTasks();
            clearInput(taskInput);
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.dataset.index;
            TaskStorage.removeTask(index);
            renderTasks();
        }
    });
}

function renderTasks() {
    taskList.innerHTML = '';
    const tasks = TaskStorage.getTasks();
    tasks.forEach((task, index) => {
        const li = createTaskElement(task, index);
        taskList.appendChild(li);
    });
}

// js/modules/data.js
export class TaskStorage {
    static getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    static addTask(task) {
        const tasks = this.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(index) {
        const tasks = this.getTasks();
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

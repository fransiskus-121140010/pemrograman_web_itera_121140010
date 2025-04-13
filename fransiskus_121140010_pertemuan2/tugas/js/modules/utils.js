// js/modules/utils.js

// arrow function untuk bikin elemen tugas
export const createTaskElement = (task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" data-index="${index}">Hapus</button>
    `;
    return li;
};

// arrow function untuk reset input
export const clearInput = input => input.value = '';

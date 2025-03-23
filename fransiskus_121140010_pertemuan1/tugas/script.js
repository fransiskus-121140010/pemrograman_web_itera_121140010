document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    setupCalculator();
});

// ** To-Do List Functions **
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = createTaskElement(taskText);
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
}

function createTaskElement(text) {
    let li = document.createElement("li");
    li.textContent = text;
    li.classList.add("cursor-pointer");

    li.addEventListener("click", function () {
        this.classList.toggle("completed");
        saveTasks();
    });

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add("ml-2", "text-red-500");
    deleteButton.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(deleteButton);
    return li;
}

function saveTasks() {
    let tasks = Array.from(document.querySelectorAll("#taskList li")).map(li => ({
        text: li.childNodes[0].nodeValue.trim(),
        completed: li.classList.contains("completed"),
    }));

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        let li = createTaskElement(task.text);
        if (task.completed) li.classList.add("completed");
        taskList.appendChild(li);
    });
}

// ** Kalkulator Functions **
function setupCalculator() {
    document.querySelectorAll(".btn-op").forEach(button => {
        button.addEventListener("click", () => hitung(button.dataset.op));
    });
}

function hitung(operasi) {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = "";

    if (isNaN(angka1)) {
        document.getElementById("hasil-kalkulator").innerHTML = "Masukkan angka pertama yang valid!";
        return;
    }

    if (operasi !== "akar" && isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = "Masukkan angka kedua yang valid!";
        return;
    }

    switch (operasi) {
        case "tambah": hasil = angka1 + angka2; break;
        case "kurang": hasil = angka1 - angka2; break;
        case "kali": hasil = angka1 * angka2; break;
        case "bagi": hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan 0!"; break;
        case "pangkat": hasil = Math.pow(angka1, angka2); break;
        case "akar": hasil = angka1 >= 0 ? Math.sqrt(angka1) : "Tidak bisa akar negatif!"; break;
        case "modulus": hasil = angka1 % angka2; break;
        default: hasil = "Operasi tidak dikenali.";
    }

    document.getElementById("hasil-kalkulator").innerHTML = `Hasil: ${hasil}`;
}

// ** Form Validation **
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = "";

    if (name.length <= 3) message = "Nama harus lebih dari 3 karakter.";
    else if (!email.includes("@") || !email.includes(".")) message = "Email tidak valid.";
    else if (password.length < 8) message = "Password minimal 8 karakter.";
    else message = "Form valid!";

    document.getElementById("formMessage").textContent = message;
}

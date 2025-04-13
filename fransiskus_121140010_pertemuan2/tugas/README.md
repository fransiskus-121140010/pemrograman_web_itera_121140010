# 📋 Personal Dashboard Mahasiswa

Aplikasi ini adalah dashboard sederhana untuk membantu mahasiswa mencatat dan mengatur daftar tugas harian.

## 🎯 Fitur Aplikasi
- Tambah tugas
- Hapus tugas
- Data tersimpan di `localStorage`, tidak hilang saat reload
- Tampilan sederhana, responsive, dan mudah digunakan

## 💻 Cara Menjalankan
1. Clone atau download folder `tugas/`
2. Buka `index.html` di browser
3. Gunakan aplikasi secara langsung, tanpa perlu server atau instalasi tambahan

## 🧠 Fitur ES6+ yang Digunakan
- ✅ `let` dan `const` untuk deklarasi variabel
- ✅ 3 Arrow Function (`createTaskElement`, `clearInput`, `renderTasks`)
- ✅ Template Literals untuk merender elemen HTML dinamis
- ✅ Penggunaan Class `TaskStorage` untuk manajemen data di localStorage
- ✅ Modul ES6 (`import` dan `export`)

## 🖼️ Screenshot Aplikasi

### ✅ Tampilan Awal
![Tampilan Awal](assets/Screenshot%202025-04-13%20232122.png)

### ➕ Tambah Tugas
![Tambah Tugas](assets/Screenshot%202025-04-13%20232159.png)

### 🗑️ Hapus Tugas
![Hapus Tugas](assets/Screenshot%202025-04-13%20232211.png)

## 🗂️ Struktur Folder
```
└── 📁tugas
    └── 📁assets
        └── Screenshot 2025-04-13 232122.png
        └── Screenshot 2025-04-13 232159.png
        └── Screenshot 2025-04-13 232211.png
    └── 📁css
        └── style.css
    └── 📁js
        └── app.js
        └── main.js
        └── 📁modules
            └── data.js
            └── utils.js
    └── index.html
    └── README.md
```
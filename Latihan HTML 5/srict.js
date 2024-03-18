// ganti nama atau heading sesuai entry dan localStorage
const judul = document.querySelector('h1');
let nama = localStorage.getItem('nama');

if(!nama) {
    nama = prompt('masukan nama anda: ');
    localStorage.setItem('nama', nama);
}

judul.innerHTML = `Halo, ${nama}!`;


// Ganti nama dengan Entry Baru

const gantiNama = (e) => {
    nama = prompt ('Masukan nama baru anda: ');
    localStorage.setItem('nama', nama);
    e.preventDefault();
}

// untuk Hapus Nama
const hapusNama = (e) => {
    localStorage.removeItem('nama');
    e.preventDefault();
}

// untuk Hapus storafe
const hapusStorage = (e) => {
    localStorage.clear();
    e.preventDefault();
}

// toggle light-mode/dark-mode
const toggle = document.querySelector('.toggle');
let tema = localStorage.getItem('tema');

// context untuk toggle darkmode
const darkMode = () => {
    document.body.classList.add('dark-mode');
    toggle.innerHTML ='Light Mode';
    localStorage.setItem('tema', 'dark');
}

// context untuk toggle lightmode
const lightMode = () => {
    document.body.classList.remove('dark-mode');
    toggle.innerHTML ='Dark Mode';
    localStorage.setItem('tema', 'light');
}

// function jika value yang dipilih dibrowser adalah 'dark' 
// maka jalankan fungsi darkMode

if(tema === 'dark'){
    darkMode();
}

// kalau tema engga ditemukan maka setItem ke Light
if (!tema) {
    localStorage.setItem('tema', 'light');
}

// toggle function untuk menjalakan ganti tema saat onclick
toggle.addEventListener('click', function (e){
    tema = localStorage.getItem('tema');

    if (tema === 'light') {
        darkMode();
    } else {
    lightMode();
    }
    e.preventDefault();
    });



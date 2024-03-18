// Menyiapkan Canvas
const mycanvas = document.getElementById ('mycanvas');


//atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// tentukan context

const c = mycanvas.getContext('2d');

// //Manipulasi canvas
// c.fillStyle = 'lightblue';
// c.strokeStyle = '#999';
// c.lineWidth = '5';


// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// // Membuat lingkaran
// c.fillStyle = 'pink';
// c.beginPath();
// c.arc (550, 200, 150, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// // Membuat Path 
// c.fillStyle = 'Red';
// c.beginPath();
// c.moveTo(900, 50);
// c.lineTo(1050, 350);
// c.lineTo(750, 350);
// c.lineTo(900, 50);
// c.fill();
// c.stroke();
// //ATAU MENGGUNAKAN c.closePath();

// Membuat ANIMASI PADA CANVAS
let x = 300;
let speed = 5;

function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = 'pink';
    c.beginPath();
    c.arc (x, 200, 150, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
    
    if(x > innerWidth || x < 0) {
        speed = -speed;
    }
    x+= speed;
}

draw();
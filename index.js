// Modal and Non-Modal Dialog Boxes

let firstDialogBox = document.getElementById('dialog-1');
let openButton1 = document.getElementById('open-button-1');
let closeButton1 = document.getElementById('close-button-1');

openButton1.addEventListener('click', () => {
  firstDialogBox.show();
});

closeButton1.addEventListener('click', () => {
  firstDialogBox.close();
});

let secondDialogBox = document.getElementById('dialog-2');
let openButton2 = document.getElementById('open-button-2');
let closeButton2 = document.getElementById('close-button-2');

openButton2.addEventListener('click', () => {
  secondDialogBox.showModal();
});

closeButton2.addEventListener('click', () => {
  secondDialogBox.close();
});


// Canvas

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);

// Form Submission
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
})

// Template
function create() {
let temp = document.getElementsByTagName('template')[0];
let clone = temp.content.cloneNode(true);

let container = document.getElementById('template-container');
container.appendChild(clone);
}
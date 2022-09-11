const imgs = ["1.jpg", "2.jpg", "3.jpg"];
const chosenimg = imgs[Math.floor(Math.random() * imgs.length)];

const background = document.createElement("img");
background.src = `img/${chosenimg}`;

document.body.appendChild(background);

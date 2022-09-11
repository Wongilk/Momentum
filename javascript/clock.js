const clock = document.querySelector("#clock");

function makeClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
makeClock();
setInterval(makeClock, 1000);

const logInForm = document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem("userName");
const USERNAMEKEY = "userName";

function paintGreeting(userName) {
  greeting.classList.remove("hidden");
  greeting.innerText = `HELLO ${userName}`;
}

if (savedUsername === null) {
  logInForm.classList.remove("hidden");
  logInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = logInput.value;
    paintGreeting(userName);
    localStorage.setItem(USERNAMEKEY, userName);
    logInForm.classList.add("hidden");
  });
} else {
  paintGreeting(savedUsername);
}

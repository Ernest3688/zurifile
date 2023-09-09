const nameInput = document.querySelector("[data-testid='name']");
const emailInput = document.querySelector("[data-testid='email']");
const timeElement = document.querySelector("[data-testid='time']");

setInterval(() => {
  timeElement.innerHTML = new Date().toLocaleString();
}, 1000);

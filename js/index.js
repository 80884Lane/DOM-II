// Your code goes here
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", function (event) {
funBus.textContent = "AWESOME";
});

const welCome = document.querySelector("header h2");
welCome.addEventListener("mouseover", function (event) {
welCome.textContent = "HOP ON IN!";
});

const letsGo = document.querySelector(".content-section h2");
letsGo.addEventListener("mouseover", function (event) {
letsGo.textContent = "WHAT ARE YOU WAITING FOR!";
});

const adventure = document.querySelector(".inverse-content h2");
adventure.addEventListener("mouseover", function (event) {
adventure.textContent = "THE WORLD IS YOUR OYSTER!";
});

const destination = document.querySelector(".content-destination h2");
destination.addEventListener("mouseover", function (event) {
destination.textContent = "PARADISE AWAITS!";
});

const foot = document.querySelector(".footer p");
foot.addEventListener("mouseover", function (event) {
foot.textContent = "SEE YOU SOON!";
});

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    bus.style.transform = `scale(${scale})`;
}
let scale = 1;
const bus = document.querySelector("header img");
bus.onwheel = zoom;
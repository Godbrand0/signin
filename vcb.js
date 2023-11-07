const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');
const back = document.getElementById('ico-4');
const back2 = document.getElementById('ico-5');

btn1.addEventListener("click", () => {
    container1.classList.remove ('active')
    container3.classList.add ('active')
});
btn2.addEventListener("click", () => {
    container1.classList.remove ('active')
    container2.classList.add ('active')
});

back.addEventListener("click", () => {
    container2.classList.remove ('active')
    container1.classList.add ('active')
});
back2.addEventListener("click", () => {
    container3.classList.remove ('active')
    container1.classList.add ('active')
});
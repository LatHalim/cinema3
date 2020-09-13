/* Задача №1*/
function name(event) {
    let firstname = document.getElementById('firstname').value;
    document.getElementById('helloName').innerHTML = "Привет" + " " + firstname + "!";
    event.preventDefault();
}
form.addEventListener('submit', name);

/* Задача №2*/
function max(a, b) {
    return a > b ? a : b;
}
document.getElementById('result').innerHTML = max(2, 4)

/* Задача №4*/
function randomMM(min, max) {
    let numberMin = Math.ceil(min);
    let numberMax = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const random = document.getElementById('random');
document.getElementById('random').innerHTML = randomMM(1, 3);

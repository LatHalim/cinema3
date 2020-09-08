/* Задача №1*/
function name() {
    let firstname = document.getElementById('firstname').value;
    let html = 'Hello' + firstname;
    document.getElementById('resName').innerHTML = html;
}
document.getElementById('submit').onclick = name;

/* Задача №2*/
function max(a, b) {
    return a > b ? a : b;
}
document.getElementById('result').innerHTML = max(2, 4)

/* Задача №4*/
function randomMM(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let resultRan = randomMM(1, 3)
Random = document.getElementById('Random')
Random.innerHTML = resultRan;

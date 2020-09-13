/* Задача №1*/
function name(event) {
    let firstname = document.getElementById('firstname').value;
    document.getElementById('helloName').innerHTML = "Привет" + " " + firstname +"!";
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
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let resultRan = randomMM(1, 3)
Random = document.getElementById('Random')
Random.innerHTML = resultRan;

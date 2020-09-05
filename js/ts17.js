/* Задача №1*/
function name() {
    let firstname = document.getElementById('firstname').value;
    let html = 'Hello' + firstname;
    document.getElementById('resName').innerHTML = html;
}
document.getElementById('submit').onclick = name;

/* Задача №2*/
function abc(a, b) {
    if (a > b) {
        console.log(a)
    }
    if (a <= b) {
        console.log(b)
    }
}
let result = abc(4, 7)


/* Задача №3*/
function abC(d, c) {
    if (d > c) {
        console.log(d)
    }
    if (d <= c) {
        console.log(c)
    }
}
let result1 = abC(5, 9)



/* Задача №4*/
function randomMM(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let resultRan = randomMM(1, 100)
Random = document.getElementById('Random')
Random.innerHTML = resultRan;

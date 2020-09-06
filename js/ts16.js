/* Задача №1*/
let masiv = ['first', 5, true];
  console.log(masiv);


/* Задача №2*/
a3 = {
    3 : 'hello',
    'one' : 'hi',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
    }
    let two = (Object.keys(a3));
    let resTwo = two.filter(i => i.length > 4);
    console.log(resTwo)

/* Задача №3*/
let newMassiv = new Map();
console.log(newMassiv);
function acoMassiv () {
  let key = document.getElementById('u7-key_input');
  let value = document.getElementById('u7-value_input');
  newMassiv.set(key.value,value.value);
  console.log(newMassiv);
}


/* Задача №4*/
let a = ['Tor', 'Lokki', 'Odin',34, 'privet'];
let four = (a.length);
console.log(four)


/* Задача №5*/
d = [0, 2, 5, -4, 6, 22, -9, -12, ,13, 78]
let a11 = document.getElementById('a1');
let a22 = document.getElementById('a2');
let a1 = [];
let a2 = [];
    for (i = 0; i < d.length; i++)
{
  if ((d [i] % 2) === 0)
  {
      a1.push(d[i]);
      a11.innerHTML = ("Четные: " + a1);
  }
  if ((d [i] % 2) === 1)
  {
    a2.push(d[i]);
      a22.innerHTML = ("Нечетные: " + a2);
  }
  if ((d [i] % 2) === -1)
  {
    a2.push(d[i]);
      a22.innerHTML = ("Нечетные: " + a2);
  }
}


/* Задача №6*/
d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]
let res = 1;
for (i = 0; i < d.length; i++) {
  res = res+d[i];
  }
  console.log(res);








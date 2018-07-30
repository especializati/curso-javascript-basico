//************************************************************
//********************** Exemplo 01 **************************
//****** Primeiro Programa
// console.log('Hello World');



//************************************************************
//********************** Exemplo 02 **************************
//****** Comentários
// console.log('Hello World');
/*
console.log('Hello World');
console.log('Hello World');
*/



//************************************************************
//********************** Exemplo 03 **************************
//****** Variáveis
/*
var carlos = 'Carlos Ferreira 2';
console.log(carlos);

carlos = true;
console.log(carlos);

carlos = 19999;
console.log(carlos);

carlos = 3.14;
console.log(carlos);
*/



//************************************************************
//********************** Exemplo 04 **************************
//****** Concatenação
/*
var name = prompt('O seu nome?');
var age = prompt('A sua idade?');
var ageTwo = 90;

console.log('O ' + name + ' tem ' + age + ' anos de idade.');
console.log(age + '' + ageTwo);
console.log(name + ' ' + age);
*/



//************************************************************
//********************** Operadores **************************
// Aritméticos:
// var n1 = 12;
// var n2 = 4;
// console.log(n1 + n2 + 4);
// console.log(n1 - n2 - 2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(4 ** 3);

// console.log((4 - 3 + 2) * 2);
// console.log((4 - 2 + 2) / 2);
// console.log(((4 - 2 + 2) / 2 + 2) * 3);

// console.log(n1++);
// console.log(n1);
// console.log(++n1);

// console.log(n1--);
// console.log(n1);
// console.log(--n1);

// console.log(2 % 2);


// Atribuição:
// var n1 = 12;
// var n2 = n1;

// n1 += 1;
// n1 -= 7;
// n1 *= 2;
// n1 /= 2;
// console.log(n1);


// Comparação:
// console.log("Carlos" == "Carlos");
// console.log(2 === '2');
// console.log(2 != 3);
// console.log(2 !== 2);
// console.log(4 > 3);
// console.log(2 < 3);
// console.log(5 >= 4);
// console.log(4 <= 4);


// Lógicos
// var n1 = 12;
// console.log(typeof n1 == "number" && n1 == 123);
// console.log(typeof n1 == "number" || n1 == 123);
// console.log(!n1 == 14);




//************************************************************
//************** Operadores Condicionais *********************
// IF e ELSE:
// var number = false;

// if (number)
//     console.log("É verdadeiro!");

// if (2 == 2 && 3 === "3") {
//     console.log('****************************');
//     console.log("2 é igual a 2");
//     console.log('****************************');
// }

// if (4 === 4) {
//     console.log('****************************');
//     console.log("É igual");
//     console.log('****************************');
// } else {
//     console.log("É diferente!");
// }


// Operador condicional (ternário)
// var age = 17;
// var text = '';

// if (age >= 18)
//     text = 'É maior de idade!';
// else
//     text = 'É menor de idade!';
// text = (age >= 18) ? 'É maior de idade!' : 'É menor de idade!';
// console.log(text);


// Switch:
var number = 3;
var result = '';

// if (number == 1) {
//     result = 'Um';
// } else if (number == 2) {
//     result = 'Dois';
// } else if (number == 3) {
//     result = 'Três';
// } else if (number == 4) {
//     result = 'Quatro';
// } else if (number == 5) {
//     result = 'Cinco';
// } else {
//     result = 'Opção não encontrada!';
// }

// switch (number) {
//     case 1:
//         result = 'Um';
//         break;
//     case 2:
//         result = 'Dois';
//         break;
//     case 3:
//         result = 'Três';
//         break;
//     case 4:
//         result = 'Quatro';
//         break;
//     case 5:
//         result = 'Cinco';
//         break;

//     default:
//         result = 'Opção não encontrada!';
//         break;
// }
// console.log(result);



//************************************************************
//*********************** Funções ****************************
// Basic:
// function showLog () {
//     console.log('************************************');
//     console.log('**************Algo******************');
//     console.log('************************************');
// }
// showLog();


// Funções com Parâmetros:
// var n1 = 2;
// var n2 = 4;
// // var result = ((n1 + n2) * 6) / 2;

// function calc(num1, num2) {
//     console.log("Start da função");

//     return ((num1 + num2) * 6) / 2;

//     console.log("Fim da função");
// }

// console.log(calc(n1, n2));
// console.log(calc(4, 6));


// Parâmetros Opcionais
// function calc(n1, n2, n3) {
//     // if (n3 == undefined) n3 = 2;
//     n3 = (n3 == undefined) ? 2 : n3;

//     return ((n1 + n2) * 6) / n3;
// }
// console.log(calc(2, 4));


// Funções Recursivas:
// var number = 20;

// function recursiva(n) {
//     console.log(n);

//     if (n > 0)
//         return recursiva(n - 1)
// }
// recursiva(number);


// Funções aninhadas:
// function aninhadas (n1, n2, n3) {
//     function calc (n) {
//         return n * n3;
//     }

//     return calc(n1) + calc(n2);
// }

// function dobra(n) {
//     return n * 2;
// }
// console.log(aninhadas(2, 4, 4));



//************************************************************
//*********************** Arrays *****************************
// Definir Arrays:
// var names = ['Carlos', 'Ferreira', 'EspecializaTi', 'Cursos', 'Eti', 'Online'];
// var names = new Array('Carlos', 'Ferreira', 'EspecializaTi', 'Cursos', 'Eti', 'Online');
// var names = new Array(6);
// var names = [];
// console.log(names.length);

// var names = [
//     "Carlos",
//     "EspecializaTi",
// ];
// var numbers = [3,5,4,1,2];

// Manipulação de Array, ex1 (push, unshift, pop, shift):
// console.log(names[0]);
// names[0] = "Carlos Ferreira";
// console.log(names[2]);
// console.log(names);
// names.push("Cursos");
// console.log(names);

// names.unshift("Eti");
// names.unshift("Start");
// console.log(names);

// names.pop();
// console.log(names);

// names.shift();
// console.log(names);


// Manipulação de Array, ex2 (join, reverse, sort):
// console.log(names.join(' - '));
// console.log(numbers.reverse());
// console.log(numbers.sort());
/* console.log(numbers.sort(function (val1, val2) {
    return val1 < val2;
})); */


// Manipulação de Array, ex3 (indexOf, lastIndexOf, findIndex):
// console.log(names.indexOf("EspecializaTi"));
// console.log(numbers.lastIndexOf(4));
// var n = 5;
// var result = numbers.findIndex(function (item) {
//     return item == n;
// });
// console.log(result);


// Manipulação de Array, ex4 (concat, slice, toString):
// console.log(names.concat(numbers));
// numbers.sort();
// console.log(numbers);
// console.log(numbers.slice(2, numbers.length));
// console.log(numbers.toString());


// Manipulação de Array, ex5 (map, filter):
// console.log(names);
// var result = names.map(function (item) {
//     return item.toUpperCase();
// });
// console.log(result);

// console.log(numbers);
// result = numbers.map(function (value) {
//     return value * 2;
// });
// console.log(result);

// result = numbers.filter(function (item) {
//     return item == 9 || item == 3 || item == 1;
// });
// console.log(result);



// Manipulação de Array, ex6 (every, some):
// var result = numbers.every(function (value) {
//     return value >= 1 && value <=5;
// });
// console.log(result);

// var result = numbers.some(function (value) {
//     return value >= 5;
// });
// console.log(result);



// Manipulação de Array, ex7 (reduce, reduceRight):
// var result = numbers.reduce(function (previousValue, currentValue, currentIndex, items) {
//     return previousValue + currentValue;
// });
// console.log(result);

// result = numbers.reduceRight(function (previousValue, currentValue, currentIndex, items) {
//     return previousValue + currentValue;
// });
// console.log(result);




//************************************************************
//********************** Objetos *****************************

// var name = 'Carlos';

// var carlos = {
//     name: name,
//     lastName: 'Ferreira',

//     fullName: function () {
//         return this.name + ' ' + this.lastName;
//     },

//     fullNameTwo: function (separetor) {
//         return this.name + separetor + this.lastName;
//     },
// };
// console.log(carlos.fullName());
// carlos.name = 'Other';
// console.log(carlos.fullName());
// console.log(carlos.fullNameTwo(' - '));


// Ex 2 (Objetcs):
// var person = new Object();
// person.name = 'Carlos';
// person.lastName = 'Ferreira';
// person.fullName = person.name + ' ' + person.lastName;
// console.log(person['fullName']);



//************************************************************
//*********************** Loops ******************************
// var cars = [
//     {name: 'Car 1', year: 2000},
//     {name: 'Car 2', year: 2001},
//     {name: 'Car 3', year: 2002},
//     {name: 'Car 4', year: 2003},
//     {name: 'Car 5', year: 2004},
//     {name: 'Car 6', year: 2005},
// ];
// console.log('Antes');

// console.log(cars[0].name);
// console.log(cars[1].name);
// console.log(cars[2].name);
// console.log(cars[3].name);
// console.log(cars[4].name);

// FOR:
// for (var index = 0; index < cars.length; index++) {
//     var result = 'Carro: ' + cars[index].name + ', ano: ' + cars[index].year;
//     console.log(result);
// }

// WHILE
// var i = 0;
// while (i < cars.length) {
//     var result = 'Carro: ' + cars[i].name + ', ano: ' + cars[i].year;
//     console.log(result);

//     i++;
// }
// var i = cars.length - 1;
// while (i >= 0) {
//     var result = 'Carro: ' + cars[i].name + ', ano: ' + cars[i].year;
//     console.log(result);

//     i--;
// }


// DO WHILE:
// var i = 90;

// do {
//     console.log(i);

//     i++;
// } while (i <= 10);



// FOREACH
// cars.forEach(function (element, index, array) {
//     var result = 'Carro: ' + element.name + ', ano: ' + element.year;
//     console.log(result);
// });

// console.log('Depois');
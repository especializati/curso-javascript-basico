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
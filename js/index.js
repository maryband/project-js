// let msg = 'Hello World!';
// alert(msg);

// let productTitle = 'Tesla X';
// let productPrice = '150000';
// let productAvailable = 'true';

// alert(productTitle);
// alert(productPrice);
// alert(productAvailable);

// const userName = prompt('Enter your name');
// const msg = 'Hello, ' + userName;
// alert(msg);

// const userAge = parseFloat(prompt('Enter your age'));
// // const newAge = userAge + 1;
// // const msgAge = 'Next year you will be ' + newAge;
// // alert(msgAge);

// if (userAge >= 18) {
//     alert('You are adult');
// } else {
//     alert('You are child');
// }

// function sum(a, b, c) {
//     return a + b + c;
// }

// const amount = sum(42, 43, 44);
// alert(amount);

// const total = sum(100, 'Hello');
// alert(total);

// function foo() {
//     let a = prompt('Enter a', '0');
//     let b = prompt('Enter b', '0');
//     let c = prompt('Enter c', '0');
//     if (a == 0) {
//         let x = -c/b;
//         alert(`x is ${x};`);
//     } else if (b == 0 && c == 0) {
//       alert('x = 0;');
//     }  else if (c == 0) {
//         let x2 = -b/a;
//       alert(`x1 = 0; \nx2 = x2`);
//     }  else if (b == 0 && -c/a > 0) {
//       let x = Math.sqrt(-c/a);
//       alert(`x = ${x};`);
//     }  else if (b == 0 && -c/a < 0) { 
//       alert('There is no valid roots');
//     } else {
//         let D = (b*b) - (4*a*c);
//         if (D < 0) {
//             alert('Discriminant is less then 0, please try again');
//         } else {
//             let x1 = (-b + Math.sqrt(D)) / (2*a);
//             let x2 = (-b - Math.sqrt(D)) / (2*a);
//             alert(`D is ${D}; \nx1 is ${x1}; \nx2 is ${x2};`);
//         }
//     }
// }

// foo();

// const a = parseFloat (prompt('Enter A'));
// const b = parseFloat (prompt('Enter B'));
// const c = parseFloat (prompt('Enter C'));

// const result = solveQuadr(a, b, c);
// alert(result);

// function solveQuadr(a,b,c){
//     const d = calcD(a, b, c);
//     let x1, x2;
//     if (d > 0) {
//       x1 = (-b + Math.sqrt(d)) / (2*a);
//       x2 = (-b - Math.sqrt(d)) / (2*a);
//     } else if (d == 0) {
//         x1 = (-b) / (2*a);
//     } else if (d < 0) {
//         alert('There is no valid roots');
//     }
//     return 'x1 =' + x1 + ', x2 = ' + x2;
// }

// function calcD(a, b, c){
//     return (b*b) - (4*a*c);
// }

const a = parseFloat (prompt('Enter A'));
const b = parseFloat (prompt('Enter B'));
const c = parseFloat (prompt('Enter C'));

const result = solveQuadr(a, b, c);
alert(result);

function solveQuadr(a,b,c){
    const d = calcD(a, b, c);
    let x1, x2;
    if (d > 0) {
       x1 = (-b + Math.sqrt(d)) / (2*a);
       x2 = (-b - Math.sqrt(d)) / (2*a);
    return 'x1 =' + x1 + ', x2 = ' + x2;
    } else if (d == 0) {
        x1 = (-b) / (2*a);
        return 'x1 =' + x1;
    } 
    else if (d < 0) {
    return 'There is no valid roots';
    }
}

function calcD(a, b, c){
    return (b*b) - (4*a*c);
}
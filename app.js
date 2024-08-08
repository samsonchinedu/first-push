// const btn = document.getElementById('changeButton');
// var btn1 = "/\hhei/kgkfg';;sjdjsk";
// btn1 = 1;

// document.addEventListener('DOMContentLoaded', function() {
//     btn.addEventListener('click', function() {
//         document.getElementById('name').textContent = 'JavaScript';
//     });
// });

// const para1 = 1;
// const para2 = 2;
// console.log(typeof btn1);

// function myfun(para1, para2, a) {
//     console.log(para1, para2, a);
// }

// myfun(para1, 0);
// let message = 'Hello!' ;
// let sum, x, y;

// sum = x = 0;

// //  alert ( message ) ;

// console.log(sum, x, y);

// function fun() {
//     let messages = 'Hello!' ;
//     console.log(messages);
// }

// function fund() {
//     fun();
//     console.log();
// }

// fund();

// let greetings = "say Hi";
// greetings = 1
// let times = 4;
// let empty;

// if (times > 3) {
//      let hello = "say Hello instead";
//      empty = hello
   //   console.log(hello);
//  }
// console.log(empty);

// var greeting = "say Hi";
// var greeting = "say Hello instead"; 

// let sum = 10;

// sum **=10 // sum  = sum ** 2
// sum %= 7 // sum = empty = sum = 10 + 3

// console.log(typeof sum);

// Integer 

// const num = '1';

// console.log(Number.isInteger(num));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString().toUpperCase();


// #### Conditional Statement


// const getId = document.getElementById("name");

// Want say "Good monrning" if hour is equal to 6:00pm

const hour = 12;

let message = ""

let messages = ""

if (hour < 18) {
   messages = "Good morning"
} else {
   messages = "Good evening"
}

switch (hour) {
   case 18:
      message = "Good morning"
      break;
      
      case 12:
      message = "Good evening"
      break;

   default:
      message = "What is the time?"
      break;
}


console.log(message);
console.log(messages);

// take user input for two numbers
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));

// take user input to select an operator 
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${Math.round(result)}`);
        break;

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${Math.round(result)}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${Math.round(result)}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${Math.round(result)}`);
        break;

    default:
        console.log("Invalid operator");
}

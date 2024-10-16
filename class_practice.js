// const readline = require("readline-sync");
// let favNum= 7;
// let UserName = readline.question("Enter your name:");
// let UserNum = parseInt(readline.question("Enter your favourite number:"));
// if(favNum == UserNum) {console.log("that's my favourite number")    
// }else {console.log("that is not my favourite number")};


// const readline = require("readline-sync");
// let userNum = parseInt(readline.question("Enter an interger:"));
// if(userNum > 0){
//     console.log('positive number')
// } else if (userNum <0){
//     console.log('negative number')
// } else {console.log('it is zero')};

// const readlineSync = require('readline-sync');
// console.log("Just about to start a while loop");
// let response =readlineSync.question('press y to continue looping');
// while (response=='y'){
//     console.log('I looped');
//     response=readlineSync.question('press y to continue to loop');
// }

// console.log('I stopped loop');

// for (let i=1;i<=1000;i++){
//     if(i%3==0 & i%4==0) {
//         console.log(i)
//     }
// }

// const readlineSync = require('readline-sync');
// let num = readlineSync.question('Enter a number: ');
// for(let i=1; i<=num; i++){
//     if(i%3==0 && i%5==0){
//         console.log('FizzBuzz')
//     }else if(i%5==0){
//         console.log('Buzz')
//     }else if (i%3==0){
//         console.log('Fizz')
//     }else {console.log(i)}
// };

// const readlineSync = require('readline-sync');
// let num = readlineSync.question('Enter a number: ');
// for(let i=1; i<=num; i++){
//     while(i%3==0 && i&5==0){
//         console.log('fittbuzz')
//     }
//     while(i&5==0){
//         console.log('fitt')
//     }
//     while(i%3==0){
//         console.log('buzz')
//     }
//     console.log('alldone')};
   

// const readlineSync = require('readline-sync');
// let num = parseInt(readlineSync.question('Enter a number: '));
// let total = num;
// while(num>=0){
//     num = parseInt(readlineSync.question('Enter a number: '));
//     total += num
//     if(num<0){
//         console.log(total);
//     }
// }

// const readlineSync = require('readline-sync');
// let num = parseInt(readlineSync.question('Enter a number: '));
// let total = num;
// while(num>=0){
//     num = parseInt(readlineSync.question('Enter a number: '));
//     if(num>=0){
//         total += num
//         console.log(total);
//     }
// }

let currentyear = 2023;
let Population = 67765900;
const increase = 0.3/100;
Year = currentyear++;
for(i=Population;i<=80000000,i=i+i*increase){
    console.log(`Population in Year ${Year} is ${i}.`)
}



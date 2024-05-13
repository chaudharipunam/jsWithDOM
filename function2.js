// function can be assigned to the variable
// function addTwoNum(a,b){
//     return a+b;
// }
// let sum=addTwoNum;
// console.log(sum(10,1));


// function can be passed the function as an argument to the other function
// function girl(message){
//     console.log(message());
//     return "Do you Love me";
// }
// function boy(){
//     return "I Love You";
// }
// console.log(girl(boy));


// Higher order function is that function who take the other function as an argument.
// callback function is those function who passed as an argument of other function

// functions can be return from the other functions
// function fname(){
//     function lname(){
//         console.log("Poonam Chaudhary");
//     }
//     return lname();
// }
// (fname());


// Anonymous function -A function without function name is called Anonymous function
// function(){
//     console.log("Hi I'm Punam Chaudhari");
// }


// Function Expression is the function that is assigned to the variable
// let myData=function(){
//         console.log("Hi I'm Punam Chaudhari");
// }
// myData();


// IIFE - is a Immediately invoked function expression, it's immediately call after it's creation. Here also anonymous we don't use a function name
// (function(name){
//     console.log("Hello" + " " + name);
// }("Punam"))


// Arrow Function - A shorter syntax for writing function expression
// let theName=(Name)=> "Kon" + " " + Name;
// console.log(theName("Nikita"));

// let propose=()=> console.log("Do you Love me");
// propose();

// let addition=(a,b)=> a+b;
// console.log(addition(1,3));


// Rest opearator
// function names(a,b,...c){
//     console.log(a,b,c);
// }
// names("Hiii", "Jhon" , "Punam" ,"Mahima", "Vanashri", "Nikita");

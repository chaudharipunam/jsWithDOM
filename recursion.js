// what is recursion - recursion is defined the process which function calls itself until satisfied the base condition......

// Example - in simple funtion , without use recursion  
// que - find factorial.....
// function fact(num){
//     let factorial=1;
//     for(i=1; num>i; num--){
//         factorial=factorial*num;
//     }
//     console.log(factorial);
// }
// fact(5);



// Recursion function 
// que1 - find factorial  function.....
// function counter(num){
//     if(num == 0){
//         return 0;
//     }
//     console.log(num);
//     return counter(num-1);
// }
// console.log(counter(10));





// que2 - find the power of the number.....
// function power(num,num2){
//     if(num2==0){
//         return 1;
//     }
//     let r= num * power(num,num2-1);
//     return r;
// }
// console.log(power(8,3));

// que3
// recursion function
// function arraySum(a, i){
//         if(a.length == 0 || a.length==i){
//             return 0;
//         }
//         let sum= a[i]+arraySum(a, i+1);
//         return sum;
//     }
//     console.log(arraySum([arraySum([2, 4, 10, 7, 8, 5],0)],0));
//     console.log(arraySum([],0));



// que3
// simple function
// function sumArrayElem(arr){
//     let s=0;
//     for(i=0; i<arr.length; i++){
//         s+=arr[i];
//     }
//     console.log(s);
// }
// sumArrayElem([2, 4, 10, 7, 8, 5]);







// questions
// 1. Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
// function sumOfNumbers(num){
//     if(num == 0){
//         return 0;
//     }
//     let sum = num + sumOfNumbers(num-1);
//     return sum;
// }
// console.log(sumOfNumbers(5));



// 2. Write a recursive function that takes a number as an input and returns the factorial of that number.
// function factorial(num){
//     if(num == 1){
//         return 1;
//     }

//     let fact = num * factorial(num-1);
//     return fact;
// }
// console.log(factorial(5));



// 3. Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.
// simple function
// function fibonacciSeries(n) {
//     let a = 0;
//     let b = 1;
//     console.log(a);
//     for (let i = 1; i < n; i++) {
//         console.log(b); 
//         let c = a + b;
//         a = b;
//         b = c;
//     }
// }
// fibonacciSeries(10); 



// recursion function
// function fibo(n, count = 0, a = 0, b = 1) {
//     if (count >= n) {
//         return;
//     }
//     console.log(a);
//     let c = a + b;
//     fibo(n, count + 1, b, c);
// }
// fibo(10); 




//  4. Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
// function product(list , i) {
//         if (list.length == 0 || i>= list.length) {
//             return 1;
//         }
//         return list[i] * product(list, i+1);
// }
// let pro = product([2, 4, 10, 7, 8, 5], 0); 
// let Emptypro = product([], 0); 
// console.log(pro);
// console.log(Emptypro);





// 4. Write a recursive function that takes a string and reverse the string.
// function strReverse(str, i){
//        if(i == 0){
//         return str[0];
//        } 
//        let reverse = str[i] + strReverse(str, i-1);
//        return reverse;
// }
// console.log(strReverse("Hello Poonam !!", "Hello Poonam !!".length - 1));





//  5. Write a recursive function to find sum of range a-b numbers.
// function rangeSum(a,b){
//     if(a>b){
//         return 0;
//     }
//     return a + rangeSum(a+1, b);
// }
// console.log(rangeSum(5,8));


//  6. Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
	// input array :    ['foo', 'bar', 'world', 'hello']
    // output array : ['FOO', 'BAR', 'WORLD', 'HELLO']

    // function convertToUpperCase(array, i, result) {
    //     if (i >= array.length) {
    //         return result;
    //     }
    //     let capitalletter = array[i].toUpperCase();
    //     result = result.concat([capitalletter]);
    //     return convertToUpperCase(array, i + 1, result);
    // }
    // console.log(convertToUpperCase(['foo', 'bar', 'world', 'hello'], 0, []));
    




    
// que3
// recursion function
// function arraySum(a, i){
//         if(a.length == 0 || a.length==i){
//             return 0;
//         }
//         let sum= a[i]+arraySum(a, i+1);
//         return sum;
//     }
//     console.log(arraySum([arraySum([2, 4, 10, 7, 8, 5],0)],0));
//     console.log(arraySum([],0));



// que3
// simple function
// function sumArrayElem(arr){
//     let s=0;
//     for(i=0; i<arr.length; i++){
//         s+=arr[i];
//     }
//     console.log(s);
// }
// sumArrayElem([2, 4, 10, 7, 8, 5]);







// Function to sum array elements using a loop
function sumArrayElem(arr) {
    console.time("Loop Function Time"); // Start timer for loop function
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    console.timeEnd("Loop Function Time"); // End timer for loop function
    console.log(s);
}

// Function to sum array elements recursively
function arraySum(a, i) {
    console.time("Recursion Function Time"); // Start timer for recursion function
    if (a.length == 0 || a.length == i) {
        console.timeEnd("Recursion Function Time"); // End timer for recursion function
        return 0;
    }
    let sum = a[i] + arraySum(a, i + 1);
    return sum;
}

// Call both functions and measure their execution time
let arr = [2, 4, 10, 7, 8, 5];
sumArrayElem(arr);  //simple function
arraySum(arr, 0);   //recursion function



// in both simple & recursion function who take time lesss that other one ???

// To determine which function takes less time, you can compare the execution times printed by both functions.
//  In the output you provided earlier, it shows that the "Loop Function" took 0.1 milliseconds,
//   while the "Recursion Function" took 0.373 milliseconds. Based on these measurements, 
//   the "Loop Function" is faster, as it took less time to execute compared to the "Recursion Function".
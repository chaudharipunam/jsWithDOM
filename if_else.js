// if, else-if, else condition
// let age=85;
// if(age>=18){
//     console.log("Can vote");
// }
// else{
//     console.log("can't vote");
// }


// conditional operator or ternary operator

// let age=10;
// let canVote=(age>=18)? "can vote": "Can't vote";
// console.log(canVote);


// if, else-if, else
// let age=61;
// let canVote=(age<18)? "can't vote":(age>=18 && age<60)?"Can vote":"You Are Senier CitiZon";
// console.log(canVote);



// switch statement
// let day =7;
// switch(day){
//     case 1:
//         console.log("Mon");
//         break;
//     case 2:
//         console.log("Tue");
//         break;
//     case 3:
//         console.log("Wed");
//         break;
//     case 4:
//         console.log("Thu");
//         break;
//     case 5:
//         console.log("Fri");
//         break;
//     case 6:
//         console.log("Sat");
//         break;
//     case 7:
//         console.log("Sun");
//         break;
//     default:
//         console.log("None");
// }



// let week=2;
// switch(week){
//     case 1:
//         console.log("1st week");
//         break;
//     case 2:
//         console.log("2nd week");
//         break;
//     case 3:
//         console.log("3rd week");
//         break;
//     case 4:
//         console.log("4th week");
//         break;
//     default:
//         console.log("Invalid week");
// }



// Nullish Coalescing Operator- "??"
// ex.1
// let height=1;
// let width;
// let area=(height  ??  100) * (width  ?? 50);
// console.log(area);



// ex, 2
// let height=1;
// let width= 10;
// let area=(height  ??  100) * (50 ?? width);
// console.log(area);


// or operator
// console.log(0||100);
// console.log(false || undefined);
// console.log(undefined || false || NaN);
// console.log(undefined || NaN || 0);
// console.log(undefined || false || NaN || 6);





// falsy  values - "", 0, NaN, undefined, Null, false
// checking truty value or falsy value...
// let isFalsy=0;
// let isFalsy="";
// let isFalsy=false;
// let isFalsy=NaN;
// let isFalsy=undefined;
// let isFalsy=null;
// console.log(Boolean(isFalsy));
// console.log(Boolean([]));                it's true flasy values ko chhodke all values are true




// condition for falsy values...
// let apples=0;
// if(apples){
//     console.log("Have Apples");
// }
// else{
//     console.log("Haven't Apples");
// }




// condition which checking condition is Not a Number or not...
// let num1="one";
// let num2=2;
// let result= num1/num2;
// if(isNaN(result)){
//     console.log("IT's NaN");
// }
// else{
//     console.log(result);
// }




// string camparison according to ascii value
// console.log('Z'>'A');
// console.log('A'>'B');
// console.log('Priyanka' > "Punam");
// console.log('Priya'>'Priyanka');
// console.log("10">"2");        false-  it's checking ascii value of digit of number


// (string number("2")) & number(1) comparing...
// console.log("2">1);
// console.log("1">2);
// console.log("01"==1);
// console.log(true>0);
// console.log(false==0);




// console.log("A">0);        false  - because we can't compare the string which are letters , when we will go to compare such thing it will give always false because at this time this string convert into NaN.
// console.log("A">65);



// console.log("0"==0);
// console.log(Boolean("0"));
// console.log(Boolean(0));



// console.log(typeof("0"));
// console.log(typeof(0));
// console.log(typeof(false));




// console.log(false==0);             true  -- because value of false is 0 , so, 0==0 is true...
// console.log(false===0);              false --  because it's datatype different
// console.log(null === undefined);         false --  because it's datatype different
// console.log(undefined===null);
// console.log(null==undefined);               true  - because they both haven'tt ant value
// console.log(undefined==null);               true    - because they both haven'tt ant value
// console.log(null==0);                    false - because they both are different , means null- no value  & 0=is value

// if we will compare to the 'undefined' with 0 or with any number it will print false because it's during comparing it's become "Not a Nunber"  , it's only compare with null
// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);


// string compare (numbers in string)
// console.log("10">"2");        false-  it's checking ascii value of digit of number





// print integer part without using any method lik
// let a=10;
// let b=3;
// let quotient=a/b;
// let modulus=a%b;
// let Semiresult=modulus/b;
// let finalresult=quotient-Semiresult;
// console.log(finalresult);



// print only decimal part of  quotient
// let a=10; 
// let b=3;
// let modulus=a%b;
// console.log("Modulus:  ",modulus);
// console.log("Decimal Part: ",modulus/b);




// print the sum of first & last digit of number
// let number=25109;
// let first_digit=Math.floor(number/10000);
// let last_digit=number%10;
// let sum=first_digit+last_digit;
// console.log(`Sum of First Digit & Last Digit: ${sum}`);



// let num=10_000_000;
// let num=10_000_675;
// let num=1e7;                           insead of 10_000_000 aise zero likhne se achha 1e7 es tarah se ikhe
// let num=2.3e6;                              2300_000   
// let num=5.6e10;                             56_000_000_000
// let num=2e-2;                                  0.02
// let num=5e-3;                                  0.005
// console.log(num);
// console.log(1e-2 === 1/100);                   true







// Rounding
// 1. Math.floor()      it's round down to nearest integer
// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));
// console.log(Math.floor(-3.9));






// 2. Math.ceil()     it's round up to nearest integer
// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));
// console.log(Math.ceil(-3.9));



// 3. math.round()...
// console.log(Math.round(3.1));
// console.log(Math.round(3.9));
// console.log(Math.round(3.5));
// console.log(Math.round(-3.1));
// console.log(Math.round(-3.9));
// console.log(Math.round(-3.5));




// print integer part & two digits of decimak part
// let number=3.1415278951;
// let a=number*100;
// console.log(a);
// let b=Math.round(a);
// console.log(b);
// console.log(b/100);




// toFixed()  - Rounds to the nearest integer & return String
// let num=3.14159265369;
// console.log(num.toFixed(3)); 
// let num1=3.1;
// console.log(num1.toFixed(2));
// console.log(num1.toFixed(6));  
// console.log(num1.toFixed(0));
// let num2=3.5;
// console.log(num2.toFixed(0)); 
// console.log(0.1.toFixed(20));
// let num3=1/3;
// console.log(num3.toFixed(29));





// console.log(0.1===0.1);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);


// if we want value 0.3 by using this(0.1+0.2), then will do
// let sum=0.1+0.2;
// console.log(sum);
// console.log(sum.toFixed(1));





// checking isNaN or not
// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN('10'));
// console.log(isNaN("Hello"));
// console.log(isNaN("10Hello"));




// checking it's finite or not
// console.log(isFinite(10));
// console.log(isFinite("10"));
// console.log(isFinite(Infinity));
// console.log(isFinite("Hello"));
// console.log(isFinite("10Hello"));
// console.log(isFinite(10.3455326));




// 4. Math.random   -  will print random less than given inside of that parenthesis or method
// console.log(Math.random());
//  console.log(Math.random()*10);                 it will generate the random number till 9 or less than 10 with decimal Value
// console.log(Math.floor(Math.random()*10));           it will generate the random number till 9 or less than 10 without decimal Value



// 5. Math.max  - print max num
// console.log(Math.max(12,76,53,112,4,78));



// 6. Math.min  - print min num
// console.log(Math.min(12,76,53,112,4,78));


// 7. Math.pow  - print value which came after apply power
// console.log(Math.pow(2,7));
// console.log(Math.pow(3,-1));
// console.log(Math.pow(3,-2));
// console.log(Math.pow(3,0));
// console.log(Math.pow(3,1/2));




// 8. Math.sqrt       print the square root of number
// console.log(Math.sqrt(100));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(190));







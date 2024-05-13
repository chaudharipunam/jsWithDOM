// Basic Arithmetic Questions 

// given length and breadth of rectangle, return the area of rectangle

function areaRectangle(length, breadth){
    return length * breadth;
}
let area= areaRectangle(50, 10);
console.log("Area of rectangle: ",area);







// Take a number & print the  square of the number
function squareNum(Num){
    let square=Num * Num;
    // let square=Num**2;
    console.log("square: ",square);
}
squareNum(5);








// Way1
// Take two numbers & print only integer part when a is divided by b
function integerPart(a,b){
    let M=a/b;
    let Quotient=parseInt(M);
    console.log("Integer part of Num1 divided by Num2: ",Quotient);
}
integerPart(12,5);




//Way2
// Take two numbers & print only integer part when a is divided by b
function integerPart2(a,b){
    let DS=a/b;
    let Quotient=Math.floor(DS);
    console.log("Integer part of Num1 divided by Num2: ",Quotient);
}
integerPart2(12,5);







// Take a number &  print out the last digit of the number.
function lastDigit(Num2){
    let LastD=Num2%10;
    console.log("Last Digit is: ",LastD);
}
lastDigit(2348);







//Take a number & find the Cube of number.
function cubeNum(Num3){
    let cube=Num3* Num3 *Num3;
    //  let cube=Num3**3;
    console.log("Cube is: ",cube);
}
cubeNum(7);







// Take three digit number  & print the reverse of that number.
function reverseNum(Num4){
    let pq=Num4, c=0;
    let store="";
    while(Num4>0){
        let r=Num4%10;
        c++;
        Num4=Math.floor(Num4/10);
    }
    if(c!=3){
        console.log(`${pq} It's not three Digit Number`);
    }
    else{
        while(pq>0){
            let r2=pq%10;
            store=store+r2.toString();
            pq=Math.floor(pq/10);
        }
        console.log(store);
    }
}
reverseNum(098);







// Take a number & print out first digit of number.
function firstDig(k){
    while(k>=10){
        k=Math.floor(k/10);
    }
    console.log("First Digit is: ",k);

}
firstDig(6789);








// Take a number and return the sum of the first and last digit.
function sumFirstLast(number){
    let LastDig=number%10;
    while(number>=10){
        number=Math.floor(number/10);
    }
    let sumDig=number+LastDig;
    console.log("Sum of the First & Last Digit: ", sumDig);
}
sumFirstLast(6789);







//Take the sallary of five Employees & print the average sallary of all employees.
function AveEmployee(num1,num2,num3,num4,num5){
    let average=( num1 + num2 + num3 + num4 + num5 )/5;
    console.log("Average is", average);
}
AveEmployee(10,20,30,40,50);






// Swapping 1
//Take two numbers & swap them using third variable.
function swapNum(p,q){
    let Temp=p;
    p=q;
    q=Temp;
    console.log("Swapping Using Third Variable",p,q);
}
swapNum(5,6);





// Swapping 2
//Take two numbers & swap them without using third variable.
function swapping(d,e){
    d=d+e;
    e=d-e;
    d=d-e;
    console.log("Swapping: ",d,e);
}
swapping(20,3);









// Basic If-Else Questions 

// write a program that check if a given number is even or odd.
function evenOdd(Num1){
    if(Num1%2==0){
        console.log("It's Even Number");
    }
    else{
        console.log("It's Odd Number");
    }
}
evenOdd(5);





// Create a function that takes two numbers as parameters & returns the larger one.
function largeNum(Num2, Num3){
    if(Num2>Num3){
        console.log(`${Num2} is Large than ${Num3}`);
    }
    else{
        console.log(`${Num3} is Large than ${Num2}`);
    }
}
largeNum(56,90);



// write the function that determines if a given year is leap year.
function leapYear(Num4){
    if(Num4%4==0){
        console.log("It's a leap year");
    }
    else{
        console.log("It's not leap year");
    }
}
leapYear(56);



// Implement a program that check whether a given character is vowel or consonant.
function vowConst(letter){
    if(letter == 'a' || 'A' || 'e' || 'E' || 'i' || 'I' || 'o' || 'O' || 'u' || 'U'){
        console.log("it's Vowel");
    }
    else{
        console.log("it's Consonant");
    }
}
vowConst("i");




// Create a function that  takes three numbers as input and returns the largest among them.
function largestNum(Num5, Num6, Num7){
    if(Num5>Num6){
        if(Num5>Num7){
            return Num5;
        }
        else{
            return Num7;
        }
    }
    else if(Num6>Num7){
        return Num6;
    }
    else{
        return Num7;
    }
}
let Largestnum =largestNum(5,30,12);
console.log("Largest Number is: ",Largestnum);






// write a programthat check if given number is positive , negative & Zero.
function posNegZero(Num8){
    if(Num8>0){
        console.log("It's Positive Number");
    }
    else if(Num8==0){
        console.log("It's Zero");
    }
    else{
        console.log("It's Negative Number");
    }
}
posNegZero(19);





//  Implement the function that calculates the grade of the student based on their score.
function calcGrade(num1, num2, num3, num4, num5){
    let sum= num1 + num2 + num3 + num4 + num5;
    let perc=sum/500*100;
    if(perc<=100 && perc>90){
        console.log("A grade");
    }
    else if(perc<=90 && perc>80){
        console.log("B grade");
    }
    else if(perc<=80 && perc>70){
        console.log("C grade");
    }
    else if(perc<=70 && perc>60){
        console.log("D grade");
    }
    else if(perc<=60 && perc>50){
        console.log("E grade");
    }
    else if(perc<=50 && perc>40){
        console.log("F grade");
    }
    else if(perc<=40 && perc>35){
        console.log("G grade");
    }
    else{
        console.log("Fail");
    }
}
calcGrade(50,80,70,60,50);





// create the program that determine if a  given string is a palindrome.





//  write the function that check wehether a person eligible to vote based on their age.
function ageForVote(age){
    if(age>=18){
        console.log("person is eligible for vote");
    }
    else{
        console.log("person is not eligible for vote");
    }
}
ageForVote(22);





// // implement a program that determine the type of a triangle based on the lengths of it's sides.
function identifyTriangle(side1, side2, side3){
    if(side1==side2 && side2==side3 && side1==side3){
        console.log("It's Euilateral Triangle");
    }
    else if(side1==side2 || side2==side3 || side3==side1){
        console.log("It's Isosceles Tringle");
    }
    else{
        console.log("It's Scalene Triangle");
    }
}
identifyTriangle(33,23,3);

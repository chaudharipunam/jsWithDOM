// let arr1=["Punam",{name:"Rutu"}, 10, true, function () {console.log("Hello")}];
// arr1[4]();
// console.log(arr1.at(-1));


// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// arr.push("Vaishnavi", "Anjali","Reena");
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Komal");
// console.log(arr);


// let arr = ["Preeti", "Priyanka"];

// arr.push("Sailikitha", "Gayatri");
// arr.unshift("Sheetal", "Renuka");

// arr.pop();

// console.log(arr);




// let arr = [];
// arr[0] = "Riya";
// console.log(arr);

// arr[2] = "Raj";
// console.log(arr);

// arr[99] = "Trupti";
// console.log(arr);

// console.log(arr.length);
// console.log(arr);


// let arr = [];
// arr[21] = "Akshata";

// console.log(arr.length);
// console.log(arr);


// let arr = [];
// arr[21] = "Akshata";

// console.log(arr.length);
// console.log(arr);




// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// arr.length = 3;
// console.log(arr);

// arr.length = 5;
// console.log(arr);
// console.log(arr[4]);




// Array Methods

// 1. join()
// 2. reverse()
// 3. slice()
// 4. splice()
// 5. concat()
// 6. indexOf()
// 7. lastIndexOf()
// 8. includes()
// 9. find()
// 10. findIndex()
// 11. filter()
// 12. map()
// 13. reduce()


// splice()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// delete arr[1];
// console.log(arr);

// console.log(arr[1]);

// let removedElements = arr.splice(1, 1);
// console.log(removedElements);

// arr.splice(1, 2);
// console.log(arr);
// console.log(arr.length);

// arr.splice(1, 1, "Sheetal");
// console.log(arr);


let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

arr.splice(1, 2, "Sheetal", "Sushmita");
console.log(arr);




// let arr = [1, 2, 3, 4, 5];

// arr.splice(0, 2 , 6, 7, 8);
// console.log(arr);

// arr.splice(0, 0, 6, 7, 8);
// console.log(arr);

// arr.splice(-1, 0, 6, 7, 8);
// console.log(arr);





// slice()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];

// console.log(arr.slice(1, 3));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-2, 4));


// concat()

// let arr = [1, 2];
// let arr1 = [3, 4];
// console.log(arr.concat(arr1));


// let arr = [1, 2];
// console.log(arr.concat(3, 4));
// console.log(arr.concat([3, 4]));
// console.log(arr.concat([3, 4], [5, 6]));
// console.log(arr.concat([3, 4], 5, 6));



// indexOf()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// console.log(arr.indexOf("Raj"));


// lastIndexOf()

// let arr = ["Riya", "Raj", "Trupti", "Raj", "Sapna", "Raj"];
// console.log(arr.indexOf("Raj"));
// console.log(arr.lastIndexOf("Raj"));


// includes()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// console.log(arr.includes("Raj"));
// console.log(arr.includes("Sheetal"));


// let arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));


// let arr = [1, 2, 3, undefined, 4, 5];
// console.log(arr.indexOf(NaN));
// console.log(arr.indexOf(6));
// console.log(arr.indexOf(undefined));



// find()

// let arr = [
//     { name: "Riya", age: 20 },
//     { name: "Raj", age: 30 },
//     { name: "Trupti", age: 40 },
//     { name: "Punam", age: 50 },
//     { name: "Sapna", age: 60 }
// ];

// let user = arr.find(element => element.age === 40);
// console.log(user);
// console.log(user.name);

// let result = arr.find(function (element) {
//     return element.age === 20;
// });
// console.log(result);


// findIndex()

// let arr = [
//     { name: "Riya", age: 20 },
//     { name: "Raj", age: 30 },
//     { name: "Trupti", age: 40 },
//     { name: "Punam", age: 50 },
//     { name: "Sapna", age: 60 }
// ];

// let index = arr.findIndex(element => element.age === 40);
// console.log(index);

// let index = arr.findIndex((element) => element.name === "Riya");
// console.log(index);


// reverse()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// console.log(arr.reverse());


// join()

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// console.log(arr.join());
// console.log(arr.join(" "));
// console.log(arr.join(", "));
// console.logi(arr.jon("-"));


//Try same example using for loop
// let str = "Punam"; manuP
// console.log(str.split("").reverse().join(""));


// Homework
// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// Output: ["ayiR", "jaR", "itpurT", "manuP", "anpaS"]




// Read about map, filter, reduce

// map()

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((element) => element * 2);
// console.log(newArr);

// let newArr = arr.map((element, index) => element * index); // [1*0, 2*1, 3*2, 4*3, 5*4]
// console.log(newArr);


// filter()

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.filter((element) => element % 2 === 0);
// console.log(newArr);

// let newArr = arr.filter((element, index) => index % 2 === 0);
// console.log(newArr);


// reduce()

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (accumulator, element) {
//     return accumulator + element;
// }, 0);
// // 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
// console.log(sum);

// let sum = arr.reduce((accumulator, element) => accumulator + element, 0);
// console.log(sum);

// let sum = arr.reduce(function (accumulator, element, index) {
//     return accumulator + element + index;
// }, 0);
// 0+1+0=1, 1+2+1=4, 4+3+2=9, 9+4+3=16, 16+5+4=25
// console.log(sum);


// sort()

// let arrlog(arr.sor = [5, 3, 8, 1, 2, 4];
// console.t());

// let arr = ["Riya", "Raj", "Trupti", "Punam", "Sapna"];
// console.log(arr.sort());
// console.log(arr.sort().reverse());


// every()

// let arr = [1, 2, 3, 4, 5];

// let result = arr.every((element) => element > 0);
// console.log(result);

// let result1 = arr.every((element) => element > 1);
// console.log(result1);


// some()

// let arr = [1, 2, 3, 4, 5];

// let result = arr.some((element) => element > 4);
// console.log(result);

// let result1 = arr.some((element) => element > 5);
// console.log(result1);


// forEach()

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => console.log(element));

// arr.forEach((element, index) => console.log(element, index));

// arr.forEach((element, index, array) => console.log(element, index, array));


// fill()

// let arr = [1, 2, 3, 4, 5];

// arr.fill(0);
// console.log(arr);

// arr.fill(0, 1, 3);
// console.log(arr);

// arr.fill(0, 1);
// console.log(arr);

// arr.fill("a", 1, 3);
// arr.fill("b", 3);
// console.log(arr);


// Array.isArray()


// let arr = [1, 2, 3, 4, 5];
// console.log(Array.isArray(arr));

// let arr1 = "Riya";
// console.log(Array.isArray(arr1));

// let arr2 = { name: "Riya" };
// console.log(Array.isArray(arr2));

// let arr3 = 10;
// console.log(Array.isArray(arr3));

// let arr4 = null;
// console.log(Array.isArray(arr4));

// let arr5 = true;
// console.log(Array.isArray(arr5));
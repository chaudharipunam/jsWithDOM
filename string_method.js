
// String Methods

// find length
// let str="Hey poonam";
// console.log(str.length);



// find first & last char
// way 1
// let str="Hey Poonam";
// console.log(`first character is: ${str[0]}`);
// let last_char=str.length;
// console.log(`The Last Character is: ${str[last_char-1]}`);



// find first & last char
// way 2
// let str="Hey Poonam!";
// console.log(`first character is: ${str.at(0)}`);
// console.log(`The Last Character is: ${str.at(-1)}`);


// we can't change the char of string because it's immutable but we can change the whole string
// let str="hello!";
// str="Hello!";
// console.log(str);



// changing the case of the string
// let str="POONAM";
// console.log(str.toLowerCase());

// let str1="punam";
// console.log(str1.toUpperCase());



// if we want first char capital and then all chars small char, for that-
// let  str="pUNAM";
// let first_char=str[0].toUpperCase();
// let add_chars=first_char+str.slice(1).toLowerCase();
// console.log(add_chars);



// indexof() -  it's returns the index value of string char & it's ever take first occurance
// let str="Monika";
// console.log(str.indexOf("M"));
// console.log(str.indexOf("k"));
// console.log(str.indexOf("m")); 
// console.log(str.indexOf("l"));    


// indexof- it's taking 1st occurence
// let str2="This is a string";
// console.log(str2.indexOf("i"));
// console.log(str2.indexOf("is"));

// if we want last wala 'i' which is in str2 , for that
// console.log(str2.indexOf("i",6));                 here we give one char & one number , that number is indexing , just after that number if we find  that user given char , so it will print that char's indexing





// lastindexof() -  it's returns the index value of string char from last & it's ever take last occurance
// let str="Monika";
// console.log(str.lastIndexOf("M"));
// console.log(str.lastIndexOf("k"));
// console.log(str.lastIndexOf("m")); 
// console.log(str.lastIndexOf("l"));                   when in string , there is no that char whuch are given by user in console box SourceBuffer, it will aumatically print -1. same in lastIndexOf also



// lastIndexof- it's taking last occurence
// let str2="This is a string";
// console.log(str2.lastIndexOf("i"));
// console.log(str2.lastIndexOf("is"));

// if we want first wala 'i' which is in str2 , for that
// console.log(str2.indexOf("i",3));                 here we give one char & one number , that number is indexing , just after that number if we find  that user given char , so it will print that char's indexing



// if(str2.indexOf("This" !== -1)){    here value of 1 is false & in this condition it's checking that, that number which is given by user in condition  that str/char is present or not in string
//     console.log("Found");
// }




// includes  - it's checking that the char/str are present or not in the string if yes it will print true , otherwise false
// let str="This is a string";
// console.log(str.includes("This"));
// console.log(str.includes("this"));
// console.log("Punam".includes("n"));
// console.log("Punam".includes("l"));
// console.log("Punam".includes("n",4));
// console.log("Punam".includes("n",1));       





// startswith()   --print true if string starts as same as that string itself, otherwise false
// console.log("Punam".startsWith("Pu"));   true
// console.log("punam".startsWith("na"));   false




// endswith()   --print true if string ends as same as that string itself, otherwise false
// console.log("Punam".endsWith("am"));     true
// console.log("punam".endsWith("na"));     false



// slice()  -extract the part of string and returns a new string....
// let str="This is a string";
// console.log(str.slice(0,3));
// console.log(str.slice(5,8));
// console.log(str.slice(0));
// console.log(str.slice(3));
// console.log(str.slice(-6));
// console.log(str.slice(5,-6));
// console.log(str.slice(3,0));




// substring  - extract the characters from string,between two indices
// let str="This is a string";
// console.log(str.substring(0,3));
// console.log(str.substring(3,0));





// substr()  --- in this method ,this method create new string ,  user give two values first for indexing & second for count the number (indexing for in string from that indexing will be go till that second one value then create new string & print it.) 
// let str="This is a string";
// console.log(str.substr(0,4));
// console.log(str.substr(2,5));
// console.log(str.substr(-4,3));





// concat()   ---- join two or more strings & return a new string
// let str1="Hello";
// let str2="World!";
// console.log(str1.concat(" ",str2));
// console.log(str1+" "+str2);



// trim()  --- remove the spaces from both end of the string
// let str="       Hello World      ";
// console.log(str.trim());



// trimStart()  --- remove the spaces from beginning of the string
// let str="       Hello World      ";
// console.log(str.trimStart());



// trimEnd()  --- remove the spaces from ending of the string
// let str="       Hello World      ";
// console.log(str.trimEnd());



// padStart   -- the string is given , so ,in this method, user give two values first is for length of the string & second one is the string which we have to add until that length given by user
// let str="1";
// console.log(str.padStart(10,"Punam"));
// console.log(str.padStart(3,"Punam"));
// console.log(str.padStart(6,"Punam"));



// padEnd  - join a string with another string, until the resulting string reaches the given length
// let str="1";
// console.log(str.padEnd(10,"Punam"));
// console.log(str.padEnd(3,"Punam"));
// console.log(str.padEnd(6,"Punam"));


// repeat()  -- return the new string with specified number of copies existing string
// let str="Hello";
// console.log(str.repeat(3));                HelloHelloHello
// console.log(str.repeat(0));                   Nothing print



// replace() -- searches a string for specified CSSMathValue, or a replace expression ,& return a new string where the specified values are replaced
// let str="Hello punam";
// console.log(str.replace("punam", "Rutu"));

// let str="Hello Punam , Punam";
// console.log(str.replace("Punam", "Rutu"));                   Hello Rutu , Punam
// console.log(str.replaceAll("Punam", "Rutu"));                 Hello Rutu , Rutu






// var _ = require('lodash');


// const obj = {
//     name:"John",
//     age:30,
//     location:{
//         city:{
//             city1:"New York",
//             city2:"Los Angeles",
//             city3:{
//                 city4:"Chicago",
//                 city5:"Houston"
//             }
//         }
//     },
//     sayHii(){
//         console.log("Hello I am jhon");
//     }   
// }

// // const obj2 = JSON.parse(JSON.stringify(obj));
// const obj2 = _.cloneDeep(obj)

// console.log(obj,"main-object");
// console.log(obj2, "deep-copy-object");
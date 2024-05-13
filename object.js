// const object1 = {
//         "name": "JavaScript",
//         "type": "Programming Language",
//         "who devloped": "Brendan Eich",
//         sayHi:function(name){
//             console.log("hi"+ " " + name);
//         },
//         sayHello(names){
//             console.log("hello"+ " " + names);
//         },
//         sayBy: (namess)=> {console.log("hi"+ " " + namess);}
// }



// console.log(object1.name);
// console.log(object1["who devloped"]);

// delete object1.type;
// console.log(object1);
// let a=Object.entries(object1);
// console.log(a);
// object1.sayHi("poonam");
// object1.sayHello("diu");
// object1.sayBy("Reeta");

// const pu={
//     hello:function(){
//         console.log("Punam");
//     },
//     hi(){
//         console.log("NO");
//     },
//     bye: ()=> {
//         console.log("Punu");
//     }
// }
// pu.hello();
// pu.hi();
// pu.bye();



// function factoryFunc(fname, lname){
//     return{
//         name:fname,
//         lastname:lname,
    
// }
// let b=factoryFunc("punam", "Chaudhari");
// console.log(b);



// constructor function
// function data(name,lastname){
//      this.fname=name,
//      this.lname=lastname
// }
// let detail=new data("Punam","Chaudhari");
// console.log(detail);



let obj = {
    name: "Puran",                      
    location:"noida",                           
    address: {
        permanent: "Kanpur",
        present: "Chennai"
    },
    sayHii(){
        console.log("Hello")
    }
}

const clone = structuredClone(obj);

console.log(clone)
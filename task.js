let data={
    "first name":"punam",
    "last name":"Chaudhari",
    fullName(){
        console.log(this["first name"]+ this["last name"]);
    }
}

data.fullName()






function addNum(a,...b){
    console.log(typeof b);
    console.log(typeof a);
    let sum=0;
    for(i=0; i<b.length; i++){
        sum=sum+b[i];
    }
    let p=a+sum;
    console.log(p);
}
addNum(1,2,3,4);





// const abc={
//     name:"Punam",
//     age:20,
//     no:1234567,
// }


// let c=0;
// for(const key in abc){
//     c=c+1;
// }
// console.log(c);





// particular code ko time inerval ke bad run krta hai    - setTimeOut
// cleartime out - clear to the settimeout function ko     
// code time inerval ke bad infinite time un hota rhega - time inerval

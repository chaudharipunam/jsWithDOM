// ex 1. 
// let p= new Promise(function hi(resolve,reject){
//     let s=false;
//     if(s){
//         resolve("Hiiii");
//     }
//     else{
//         reject("Heelo");
//     }
// })

// p.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })




// ex 2.  this  is also right but we don't have to write like this
// let party= new Promise(function yesOrNo(resolve,reject){
//     let S="will get gift";
//     let R="will not get gift";
//     if(R == S){
//         resolve("She will give party");
//     }
//     else{
//         reject("She didn't get gift. so, can't give party");
//     }
// })
// party.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })






// // Ex. 3.
// function isParty (result){
//     return new Promise(function(resolve, reject){
//         if(result){
//             resolve("She will give Party");
//         }
//         else{
//             reject("She didn't get gift that's Why , She is not going to give Party");
//         }
//     });
// };

// function isGetGift(){
//     return new Promise (function (resolve,reject){
//         let gift=true;
//         if(gift){
//             resolve("Gift Got");
//         }
//         else{
//             reject("Not got gift");
//         }
//     });
// };

// isGetGift()
//     .then((result)=>{
//       console.log(result);
//       return isParty(result);
// })
// .then((result2)=>{
//     console.log(result2);
// }).catch((error)=>{
//     console.log(error);
// })





// yyyy
// function receiveGift() {
//     return true;
// }

// function partyTime() {
//     return new Promise((resolve) => {
//         resolve('lets enjoy party');
//     });
// }

// function noParty() {
//     return new Promise((resolve, reject) => {
//         reject('no party');
//     });
// }
// let treet = new Promise(function(resolve, reject) {
//     let gift = receiveGift();
//     if (gift) {
//         partyTime().then(resolve).catch(reject);
//     } else {
//         noParty().then(resolve).catch(reject);
//     }
// });

// treet.then((result) =>
// treet.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });




// Question for try 

// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM

// Do it in Promise

function enterAtm(){
    return new Promise(function (res,rej){
        let enter=false;
        if(enter){
            res("Enter ATM");
        }
        else{
            rej("Not enter to the ATM due to some reason");
        }
    });
};

function insertCard(outputof1stfunc){
    return new Promise(function (resolve,reject){
          if(outputof1stfunc){
            (setTimeout(() => {
                resolve("Card Isert");
            }, 2000));
          }
          else{
            reject("You did'nt enter Card");
          }
    });
};

function process(outputof2ndfunc){
    return new Promise(function (resol,rejec){
        if(outputof2ndfunc){
            (setTimeout(() => {
                resol("Processing.....");
            }, 2000));
        }
        else{
            rejec("It's can't process because you didn't insert card");
        }
    });
}

function pinEnter(outputof3rdfunc){
    return new Promise(function (value,reason){
        if(outputof3rdfunc){
            (setTimeout(() => {
                value("Pin Entering...");
            }, 4000));
        }
        else{
            reason("Please Enter Card");
        }
    });
}

function withdrawMoney(outputof4thfunc){
    return new Promise(function (val,rea){
        if(outputof4thfunc){
            (setTimeout(() => {
                val("Money is coming Outside");
            }, 5000));
        }
        else{
            rea("it's not possible , first Enter card");
        }
    });
}

function cashCollect(outputof5thfunc){
    return new Promise(function (valu,reas){
        if(outputof5thfunc){
            ( setTimeout(() => {
                valu("Collecting Cash");
            }, 4000));
        }
        else{
            reas("How got money? it's not possible , first Enter Card");
        }
    });
}

function leaveAtm(outputof6thfunc){
    return new Promise(function (outp,cause){
        if(outputof6thfunc){
            (setTimeout(() => {
                outp("Leave ATM");
            }, 2000));
        }
        else{
            cause("You didn't withdraw the money..");
        }
    });
}


enterAtm().then((result)=>{
    console.log(result);
    return insertCard(result);
})
.then((result2)=>{
    console.log(result2);
    return process(result2);
})
.then((result3)=>{
    console.log(result3);
    return pinEnter(result3);
})
.then((result4)=>{
    console.log(result4);
    return withdrawMoney(result4);
})
.then((result5)=>{
    console.log(result5);
    return cashCollect(result5);
})
.then((result6)=>{
    console.log(result6);
    return leaveAtm(result6);
}).catch((error)=>{
    console.log(error);
})

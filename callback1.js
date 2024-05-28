// Callback - 
// A callback function is a function that is passed as an argument to another function, 
// to be “called back” at a later time. 
// A function that accepts other functions as arguments is called a higher-order function, 
// which contains the logic for when the callback function gets executed. 
// It’s a way to make sure certain code doesn’t execute until other code has already finished execution. 
// Callback functions are used in JavaScript to perform asynchronous operations.



// callback function 
// function data(name,course, que){
//     que();
//     return `Hey ! I'm ${name} & currently I'm learning ${course}`;
// }
// function AskQue(){
//     console.log("Who are you ? & What do you do ?");
// }
//  let result = data("Punam", "Software Development", AskQue);
// console.log(result);





// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered();
//     }, 10000);
// }

// function deliveredFood(eat){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eat();
//     }, 5000)

// }

// function eatingFood(){
//     setTimeout(()=>{
//         console.log("Eating Food");
//     }, 2000)
// }

// function payment(){
//     setTimeout(()=>{
//         console.log("Payment");
//     }, 1000)
// }



// function leaveHotel(){
//     console.log("Leave the Hotel");
// }


// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);
//     eatingFood;
// }
// visitingHotel();








// Hotel Enter
// Order Food
// Food is preparing - 10 mins
// delivered to table - 5 mins
// eating - 20 mins
// payment - 10 mins
// Leave Hotel



// 1st way (wrong)
// wrong way to callback/call the function

// function havingFoodInHotel(){
//     console.log("enter to the Hotel !");
//     // console.log("ordering Appe & Momos & Manchurian & Dhokla & (Maggi)Noodles !!");
//     console.log("Choosing Menus......");
//     // console.log("Food Order ! ");
//     orderFood();
//     // console.log("Food is preparing.....");
//     preparingFood();
//     // console.log("Food is Ready Now !!");
//     ReadyFood();
//     // console.log("Food deliver to table");
//     delivergFood();
//     console.log("Eating Food");
//     // console.log("Food Finished");
//     FinishedgFood();
//     // console.log("Doing Payment");
//     payment()
//     console.log("Leave Hotel");
// }

// havingFoodInHotel();




// 2nd way wrong 
// Here doing callback means using callback function but output is not coming properly
//  so now will do by using callback hell

// function havingFoodInHotel(foOrder,prepFo,ReaFo,deliFo,finFo,paym){
//     console.log("enter to the Hotel !");
//     // console.log("ordering Appe & Momos & Manchurian & Dhokla & (Maggi)Noodles !!");
//     console.log("Choosing Menus......");
//     // console.log("Food Order ! ");
//     foOrder();
//     // console.log("Food is preparing.....");
//     prepFo();
//     // console.log("Food is Ready Now !!");
//     ReaFo();
//     // console.log("Food deliver to table");
//     deliFo();
//     console.log("Eating Food");
//     // console.log("Food Finished");
//     finFo();
//     // console.log("Doing Payment");
//     paym()
//     console.log("Leave Hotel");
// }
// havingFoodInHotel(orderFood,preparingFood,ReadyFood,delivergFood,FinishedgFood,payment);





function menuChoose(foOrder){
    setTimeout(() => {
        console.log("Choosing Menus......");
        foOrder();
    }, 3000);
}
    
function orderFood(prepFo){
    setTimeout(()=>{
                console.log("ordered Appe & Momos & Manchurian & Dhokla & (Maggi)Noodles !! ");
                prepFo();
    }, 3000)
}

function preparingFood(ReaFo){
    setTimeout(()=>{
                console.log("Food is preparing.....");
                ReaFo();
    }, 2000)
}

function ReadyFood(deliFo){
    setTimeout(()=>{
                console.log("Food/Menus are Ready Now !!");
                deliFo();
    }, 10000)
}

function delivergFood(){
    setTimeout(()=>{
                console.log("Food delivered to table");
                console.log("Eating Food");
    }, 3000)
}

function FinishedgFood(pay){
    setTimeout(()=>{
                console.log("Food Finished !");
                pay();
    }, 3000)
}

function payment(){
    setTimeout(()=>{
                console.log("Doing Payment");
                console.log("Leave Hotel");
    }, 3000)
}
    

function havingFoodInHotel(){
        console.log("enter to the Hotel !");
        // console.log("ordering Appe & Momos & Manchurian & Dhokla & (Maggi)Noodles !!");
        // console.log("Choosing Menus......");
        menuChoose(()=>{
            orderFood(()=>{
                preparingFood(()=>{
                    ReadyFood(()=>{
                        delivergFood(()=>{
                           return;
                        })
                        FinishedgFood(()=>{
                            payment(()=>{
                                console.log(" Thank You !!!!");
                            })
                        })
                    })
                })
            })
        })
        // console.log("Food Order ! ");
        // console.log("Food is preparing.....");
        // console.log("Food is Ready Now !!");
        // console.log("Food deliver to table");
        // console.log("Eating Food");
        // console.log("Food Finished");
        // console.log("Doing Payment");
        // console.log("Leave Hotel");
    }
    havingFoodInHotel();
    




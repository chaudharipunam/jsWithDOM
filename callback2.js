
// ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM


function withdrawFromAtm(){
    console.log("Enter ATM");
    // console.log("Insert Card");
    // console.log("Processing");
    // console.log("Enter Pin");
    // console.log("Withdraw Money");
    // console.log("Collect Cash");

    cardInsert(()=>{
        process(()=>{
            pinEnter(()=>{
                moneyWithdraw(()=>{
                    cashCollect(()=>{
                        leave(()=>{
                            return;
                        })
                    })
                })
            })
        })
    })
}
withdrawFromAtm();




function cardInsert(pro){
    setTimeout(() => {
        console.log("Card Isert");
        pro();
    }, 2000);
}

function process(enteringpin){
    setTimeout(() => {
        console.log("( Ruko jara, sabar karo )!! Processing.....");
        enteringpin();
    }, 2000);
}

function pinEnter(takemoney){
    setTimeout(() => {
        console.log("Pin Entering...");
        takemoney();
    }, 4000);
}

function moneyWithdraw(moneycollect){
    setTimeout(() => {
        console.log("Money is coming Outside");
        moneycollect();
    }, 5000);
}

function cashCollect(leavAtm){
    setTimeout(() => {
        console.log("Collecting Cash");
        leavAtm();
    }, 4000);
}

function leave(){
    setTimeout(() => {
        console.log("Leave ATM");
    }, 2000);
}
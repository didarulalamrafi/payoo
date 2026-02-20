// // console.log('cashout connecet')

const cashoutBtn = document.getElementById('cashout-btn');
cashoutBtn.addEventListener("click", function(){
    const valueFromNumber = getValueFromInput('cashout-number');
    console.log(valueFromNumber);
    if(valueFromNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    const valueFromAmount = getValueFromInput('cashout-amount');
    console.log(valueFromAmount);
    const balanceElement = document.getElementById('balance');
    const balanceAmount = balanceElement.innerText;
    
    console.log(balanceAmount);
    
    const newBalance = Number(balanceAmount) - Number(valueFromAmount);
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    console.log("balance Amount", newBalance);
    const ValueFromPin = getValueFromInput('cashout-pin');
    console.log(ValueFromPin);
    if(ValueFromPin == 1234){
        alert("Cash out Successful");
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid Pin");
    }
});



// const cashoutBtn = document.getElementById('cashout-btn');
// cashoutBtn.addEventListener("click", function(){
//     const cashOutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashOutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Number")
//         return;
//     }

//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     // console.log(cashoutAmount);
//     // console.log("btn click");

//     const balanceElement = document.getElementById('balance');
//     const balanceAmount = balanceElement.innerText;
    
//     // set new balance
//     const newBalance = Number(balanceAmount) - Number(cashoutAmount);
//     if(newBalance < 0 || typeof newBalance !== Number ){
//         alert("Invalid Amount");
//         return;
//     }    
    
//     // Pin check
//     const pinInput = document.getElementById('cashout-pin');
//     const pin = pinInput.value;
//     if(pin == 1234){
//         alert('Cash Out successful');
//         balanceElement.innerText = newBalance;
//         console.log(balanceAmount);

//     }
//     else{
//         alert("Invalid Pin");
//         return
//     }
//     console.log(pin)

//     console.log(newBalance);

// });
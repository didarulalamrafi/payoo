// console.log('cashout connecet')

const cashoutBtn = document.getElementById('cashout-btn');
cashoutBtn.addEventListener("click", function(){
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashOutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Number")
        return;
    }

    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    // console.log(cashoutAmount);
    // console.log("btn click");

    const balanceElement = document.getElementById('balance');
    const balanceAmount = balanceElement.innerText;
    
    // set new balance
    const newBalance = Number(balanceAmount) - Number(cashoutAmount);
    if(newBalance < 0 ){
        alert("Invalid Amount");
        return;
    }    
    
    // Pin check
    const pinInput = document.getElementById('cashout-pin');
    const pin = pinInput.value;
    if(pin == 1234){
        alert('Cash Out successful');
        balanceElement.innerText = newBalance;
        console.log(balanceAmount);

    }
    else{
        alert("Invalid Pin");
        return
    }
    console.log(pin)

    console.log(newBalance);

});
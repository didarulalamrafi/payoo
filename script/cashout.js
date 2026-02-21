// // console.log('cashout connecet')

const cashoutBtn = document.getElementById("cashout-btn");
cashoutBtn.addEventListener("click", function () {
  const valueFromNumber = getValueFromInput("cashout-number");
  console.log(valueFromNumber);
  if (valueFromNumber.length != 11) {
    alert("Invalid Number");
    return;
  }
  const valueFromAmount = getValueFromInput("cashout-amount");
  console.log(valueFromAmount);

  // Balance calculate
  const currentBalance = getBalance();
  console.log(currentBalance);

  const newBalance = currentBalance - Number(valueFromAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  console.log("balance Amount", newBalance);
  const ValueFromPin = getValueFromInput("cashout-pin");
  console.log(ValueFromPin);
  if (ValueFromPin == 1234) {
    alert("Cash out Successful");
    setBalance(newBalance);

    // history ke dhore niye asbo *******************
    // **********************
    const history = document.getElementById("history-container");
    // create a div
    const newHistory = document.createElement("div");

    // innerHTML create
    const historyInfo = (newHistory.innerHTML = `
            <div id="transaction-card" class="p-5 bg-base-100">
                Cash out successful from ${valueFromNumber} tk ${valueFromAmount} 
      at ${Date()}
            </div>`);

    // history add
    history.append(newHistory);
    console.log(historyInfo);
  } else {
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

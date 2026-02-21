document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 select a bank
  const bankAccountName = document.getElementById("select-bank");
  const bankAccount = bankAccountName.value;
  console.log(bankAccount);
  if (bankAccount == "Select a Bank") {
    alert("Please selecte a bank");
    return;
  }
  // Bank account number
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("Please input vaild account number");
    return;
  }
  console.log(accountNumber);

  // Amount number
  const addAmount = getValueFromInput("add-money-amount");

  // current balance
  const currentBalance = gelBalance();
  const newBalance = currentBalance + Number(addAmount);
  //   console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == 1234) {
    alert(
      `     Add money successful from ${bankAccount} Tk ${addAmount}
      at ${Date()}`,
    );
    const blanaceSet = setBalance(newBalance);

    // history ke dhore niye asbo *******************
    // **********************
    const history = document.getElementById("history-container");
    // create a div
    const newHistory = document.createElement("div");

    // innerHTML create
    const historyInfo = (newHistory.innerHTML = `
            <div id="transaction-card" class="p-5 bg-base-100">
                Add money successful from ${bankAccount} Tk ${addAmount}
      at ${Date()}
            </div>`);

    // history add
    history.append(newHistory);
    console.log(historyInfo);

    // console.log(blanaceSet);
  } else {
    alert("Invalid Pin");
    return;
  }
  // Set Balance
});

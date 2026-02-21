const transferBtn = document.getElementById("transfer-btn");

transferBtn.addEventListener("click", function () {
  //   console.log("btn Click");
  const transferNumber = getValueFromInput("transfer-number");
  if (transferNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  const transferAmount = getValueFromInput("tranfer-amount");
  const oldBalance = getBalance();

  const newBalance = oldBalance - Number(transferAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const pin = getValueFromInput("tranfer-pin");
  if (pin == 1234) {
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});

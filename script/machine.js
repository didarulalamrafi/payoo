// console.log("machine added")
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// Balance Machine

function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("Current balance", balance);
  return Number(balance);
}

// Balance set machine
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const getBonus = document.getElementById("get-bonus");
  const transaction = document.getElementById("transaction");
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  getBonus.classList.add("hidden");
  transaction.classList.add("hidden");

  const selecte = document.getElementById(id);
  selecte.classList.remove("hidden");
}

// History *****************

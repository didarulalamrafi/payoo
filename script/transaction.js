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

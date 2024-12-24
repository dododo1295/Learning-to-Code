let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const purchase = document.getElementById("purchase-btn");

let currency = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

purchase.addEventListener("click", () => {
  const cashValue = parseFloat(cash.value);
  const changeDue = cashValue - price;

  if (cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cashValue === price) {
    change.innerText = "No change due - customer paid with exact cash";
    return;
  }

  const changeResult = getChange(changeDue, cid);

  if (
    changeResult.status === "INSUFFICIENT_FUNDS" ||
    changeResult.status === "CLOSED"
  ) {
    change.innerText = `Status: ${changeResult.status} ${formatChange(changeResult.change)}`;
  } else {
    let changeText = `Status: OPEN ${formatChange(changeResult.change)}`;
    change.innerText = changeText.trim();
  }
});

const getChange = (changeDue, cid) => {
  let totalCid = parseFloat(
    cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2),
  );

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeDue) {
    return {
      status: "CLOSED",
      change: cid.filter(([_, amount]) => amount > 0).reverse(),
    };
  }

  const changeArr = [];
  let leftOverChange = changeDue;

  for (let i = currency.length - 1; i >= 0; i--) {
    let unit = currency[i][0];
    let unitValue = currency[i][1];
    let cidUnit = cid[i][1];

    if (unitValue <= leftOverChange && cidUnit > 0) {
      let amount = 0;

      while (leftOverChange >= unitValue && cidUnit >= unitValue) {
        leftOverChange = (leftOverChange - unitValue).toFixed(2);
        cidUnit -= unitValue;
        amount += unitValue;
      }

      if (amount > 0) {
        changeArr.push([unit, parseFloat(amount.toFixed(2))]);
      }
    }
  }

  leftOverChange = parseFloat(leftOverChange); // Convert back to number for accuracy

  if (leftOverChange > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check if the change due equals total cash in drawer
  if (changeDue === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  return { status: "OPEN", change: changeArr };
};
const formatChange = (changeArr) =>
  changeArr
    .filter(([_, amount]) => amount > 0)
    .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
    .join(" ");

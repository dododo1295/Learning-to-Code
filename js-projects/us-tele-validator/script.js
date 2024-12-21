const inputValue = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

check.addEventListener("click", () => {
  const input = inputValue.value;
  const inputArr = input.split("");

  // alert if no input
  if (inputArr.length === 0) {
    alert("Please provide a phone number");
    return;
  }
  // goes through array backwards finds non-numbers and removes them
  for (let i = inputArr.length - 1; i >= 0; i--) {
    if (isNaN(inputArr[i])) {
      inputArr.splice(i, 1);
      continue;
    }
  }
  // throws error if the number is too long or too short
  if (inputArr.length > 11) {
    alert("This is not a valid US number");
    inputValue.value = "";
    return;
  } else if (inputArr.length < 7) {
    alert("This is not a valid US number");
    inputValue.value = "";
    return;
  }

  results.innerText = `Valid US number: ${inputArr.join("")}`;
});

clear.addEventListener("click", () => {
  results.innerText = "";
  inputValue.value = "";
});
// still need to convert to string or structure the output into a valid phone number format.

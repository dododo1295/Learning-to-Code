const inputValue = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

check.addEventListener("click", () => {
  const input = inputValue.value;
  const inputArr = input.split("");
  let formattedNumber = "";

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
  if (inputArr.length > 11 || (inputArr.length > 10 && inputArr[0] !== "1")) {
    alert("This is not a valid US number");
    inputValue.value = "";
    results.innerText = "";
    return;
  } else if (inputArr.length < 10) {
    alert("This is not a valid US number");
    inputValue.value = "";
    results.innerText = "";
    return;
  }

  if (inputArr.length === 10) {
    // Format as 555-555-5555
    formattedNumber = `(${inputArr.slice(0, 3).join("")})${inputArr.slice(3, 6).join("")}-${inputArr.slice(6, 10).join("")}`;
  } else if (inputArr.length === 11) {
    // Format as 1 (555) 555-5555
    formattedNumber = `${inputArr[0]} (${inputArr.slice(1, 4).join("")}) ${inputArr.slice(4, 7).join("")}-${inputArr.slice(7, 11).join("")}`;
  }

  if (formattedNumber) {
    results.innerText = `Valid US number: ${formattedNumber}`;
  }
});

clear.addEventListener("click", () => {
  results.innerText = "";
  inputValue.value = "";
});

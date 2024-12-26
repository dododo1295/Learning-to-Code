const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

check.addEventListener("click", () => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if (!input.value) {
    alert("Please provide a phone number");
  } else if (regex.test(input.value)) {
    results.innerText = `Valid US number: ${input.value}`;
  } else {
    results.innerText = `Invalid US number: ${input.value}`;
  }
});
clear.addEventListener("click", () => {
  results.innerText = "";
});

//
//
// potential regex for errors? /^[0-9\(\)\-]*$/

//  1 w/ space  (1\s?)?
//  opt paren  (\(\d{3}\)|\d{3})
//  opt hyphen ([\s-]?)
//  3 dig \d{3}
//  opt hyphen ([\s-]?)
// 4 dig \d{4}

const usrInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const numIn = usrInput.value.trim();
  const numArr = numIn.split("");
  results.innerText = numArr;
  console.log(numArr);

  if (numArr.length === 0) {
    results.innerText = "Please provide a phone number";
  }
});
// potential regex for errors? /^[0-9\(\)\-]*$/

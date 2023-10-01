const next_btnEl = document.querySelector(".next_btn");
const show_hiddenEl = document.querySelector(".hidden");
const show_hidden_btnEl = document.querySelector(".hidden_btn");
const bill_amountEl = document.querySelector("#bill_amount");
const check_btnEl = document.querySelector(".check_btn");
const cash_amountEl = document.querySelector("#cash_amount");
const notes = [2000, 500, 100, 20, 10, 5, 1];
const result = document.querySelectorAll(".no_of_notes");

next_btnEl.addEventListener("click", function () {
  if (bill_amountEl.value === "") {
    alert("PLease first enter something in the Bill Amount");
  } else {
    console.log("clicked");
    next_btnEl.style.display = "none";
    show_hiddenEl.style.display = "block";
    show_hidden_btnEl.style.display = "inline-block";
  }
});

check_btnEl.addEventListener("click", function () {
  if (cash_amountEl.value === "") {
    alert("Please enter something in the Cash Given");
  } else if (cash_amountEl.value - bill_amountEl.value < 0) {
    alert(
      `Please give ${bill_amountEl.value - cash_amountEl.value} bucks more`
    );
  } else if (bill_amountEl.value === cash_amountEl.value) {
    alert("You are good to go");
  } else {
    let arr = [];
    let remaining_balance = cash_amountEl.value - bill_amountEl.value;
    for (let i = 0; i < notes.length; i++) {
      arr.push(Math.trunc(remaining_balance / notes[i]));
      remaining_balance = remaining_balance % notes[i];
    }
    for (let i = 0; i < arr.length; i++) {
      result[i].innerHTML = arr[i];
    }
  }
});

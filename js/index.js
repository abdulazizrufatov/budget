const elForm = document.querySelector(".budget-form");
const elInput = document.querySelector(".input-budget");
const budgetTitle = document.querySelector(".budget-title");
const balanceTitle = document.querySelector(".balance-title");
const expenseInput = document.querySelector(".expense-input");
const expenseForm = document.querySelector(".expense-form");
const expenseBox = document.querySelector(".expense-box");
const expenseSpan = document.querySelector(".expense-span");
const amountInput = document.querySelector(".amount-input");
const amountBox = document.querySelector(".amount-box");
const iconBox = document.querySelector(".button-box");

const arr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  budgetValue = elInput.value;

  budgetTitle.textContent = +budgetValue;
  balanceTitle.textContent = budgetValue;
});

expenseForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  expenseValue = expenseInput.value;

  const expenseDesc = document.createElement("p");
  expenseDesc.textContent = expenseValue;
  expenseDesc.setAttribute("class", "expense-desc");
  expenseBox.appendChild(expenseDesc);

  amountValue = amountInput.value;

  const amountDesc = document.createElement("p");
  amountDesc.textContent = `${amountValue} $`;
  amountDesc.setAttribute("class", "expense-desc");
  amountBox.appendChild(amountDesc);

  balanceTitle.textContent = balanceTitle.textContent - amountValue;
  expenseSpan.textContent = +amountValue;

  if (balanceTitle.textContent - amountValue < 0) {
    budgetTitle.textContent = "Finished Money";
    balanceTitle.textContent = "Finished Money";
  }

  const bookmarkBtn = document.createElement("button");
  const deletBtn = document.createElement("button");
  deletBtn.setAttribute("class", " border-0 bg-transparent d-block mb-4");

  const deletImg = document.createElement("img");
  deletBtn.appendChild(deletImg);
  deletImg.setAttribute("src", "./images/delet.png");
  deletImg.setAttribute("class", "delet-img");

  iconBox.appendChild(deletBtn);
  deletBtn.addEventListener("click", function () {
    expenseDesc.innerHTML = null;
    deletBtn.innerHTML = null;
    amountDesc.innerHTML = null;
  });
});

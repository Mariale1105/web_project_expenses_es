let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";

totalExpensesValue = expenseEntries.reduce((total, expense) => total + expense[1], 0);

function calculateAverageExpense() {
    return (!totalExpensesValue) ? 0 : totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor(balance) {
  balance = calculateBalance();
  balanceColor = balance < 0 ? "red" : balance < budgetValue * 0.25 ? "orange" : "green";
  return balanceColor;
}

function calculateCategoryExpenses(category) {
  return expenseEntries.reduce((total, expense) => expense[0] === category ? total + expense[1] : total, 0);
}

function calculateLargestCategory() {
  const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];
  const categoriesData = categories.map(category => [category, calculateCategoryExpenses(category)]);
  return categoriesData.reduce((max, current) => current[1] > max[1] ? current : max)[0];
}

function addExpenseEntry([category, amount]) {
  expenseEntries.push([category, amount]);
  totalExpensesValue += amount;
}
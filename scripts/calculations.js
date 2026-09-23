let budgetValue = 0;
let totalExpensesValue = 219;
let balanceColor = "green"; //color predeterminado del valor del balance
let balance = 0; //Incializar variable balance

let expenseEntries = [
    ["groceries", 33],
    ["restaurants", 50],
    ["transport", 12],
    ["home", 70],
    ["subscriptions", 14],
    ["groceries", 28],
    ["subscriptions", 12]
];
//calcular valor total de gastos
for (let i = 0; i < expenseEntries.length; i++) {
    totalExpensesValue += expenseEntries[i][1];
}

// calcular el valor promedio de gastos
function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    } else {
        let averageExpense = totalExpensesValue / expenseEntries.length;
        return averageExpense;
    }
}

//calcular el saldo
function calculateBalance() {
    balance = budgetValue - totalExpensesValue;
    return balance;
}

//definir color del balance
function updateBalanceColor() {
    if (balance < 0) {
        balanceColor = "red";
    } else if (balance < budgetValue * 0.25) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}

//calculo de estadistica por categoria
function calculateCategoryExpenses(categoryName) {
    let categoryTotal = 0;

    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === categoryName) {
            categoryTotal += expenseEntries[i][1];
        }
    }

    return categoryTotal;
}

//calculo de la categoria con mayor gasto
function calculateLargestCategory() {
    let largestCategory = "";
    let largestExpense = 0;

    for (let i = 0; i < expenseEntries.length; i++) {
        let category = expenseEntries[i][0];
        let amount = expenseEntries[i][1];
        if (amount > largestExpense) {
            largestExpense = amount;
            largestCategory = category;
        }
    }

    return largestCategory;
}

//Añadir nuevos gasto
function addExpenseEntry(category, amount) {
    expenseEntries.push([category, amount]);
    totalExpensesValue += amount;
}
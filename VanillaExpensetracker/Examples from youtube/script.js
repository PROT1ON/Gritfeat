// Initialize data
let transactions = [
  {
    id: 1,
    date: "2025-01-14",
    category: "Subscription",
    amount: -440,
    status: "Success",
    type: "expense",
  },
  {
    id: 2,
    date: "2025-01-10",
    category: "Transfer",
    amount: -440,
    status: "Success",
    type: "expense",
  },
  {
    id: 3,
    date: "2025-01-08",
    category: "Transfer",
    amount: -440,
    status: "Success",
    type: "expense",
  },
];

let monthlyIncome = 2645;
let monthlyExpenses = 1895;

// Set today's date as default
const today = new Date().toISOString().split("T")[0];
document.getElementById("incomeDate").value = today;
document.getElementById("expenseDate").value = today;

// Modal functions
function openIncomeModal() {
  document.getElementById("incomeModal").style.display = "block";
  document.body.style.overflow = "hidden";
}
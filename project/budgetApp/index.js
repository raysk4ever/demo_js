function eleById(id) {
    return document.getElementById(id)   
}
let data = {
    totalMoney: 0,
    expenses: []
}
const balance = eleById('balance')
const debit = eleById('debit')
const credit = eleById('credit')
const inputMoney = eleById('input-money')
const inputType = eleById('input-type')
const [showExpenses] = document.getElementsByClassName('show-expenses')

function updateList() {
    showExpenses.innerHTML = ''
    data.expenses.forEach((expense) => {
        const newExpenseItem = document.createElement('div')
        newExpenseItem.className = 'single-expense'
        newExpenseItem.innerHTML = `
            <span>${expense.type}</span>
            <span>${expense.money}</span>
            <button>Edit</button>
            <button>Remove</button>
        `
        showExpenses.appendChild(newExpenseItem)
    })
}

function handleCredit(event) {
    const money = inputMoney.value
    if(!money) {
        alert('Invalid Money')
        return
    }

    data.totalMoney = data.totalMoney + parseInt(money)
    balance.innerText = data.totalMoney
    if(data.totalMoney > 100) {
        balance.style.color = 'green'
    } else {
        balance.style.color = 'red'
    }
}

function handleDebit(event) {
    const money = inputMoney.value
    const type = inputType.value

    if(!money || !type) {
        alert('Invalid Details')
        return
    }

    if(money > data.totalMoney) {
        alert('Too much Expensive')
        return
    }
    const newExpense = { money, type }
    data.totalMoney = data.totalMoney - parseInt(money)
    data.expenses.unshift(newExpense)
    // data.expenses = [ newExpense, ...data.expenses]
    balance.innerText = data.totalMoney

    updateList()
}

credit.addEventListener('click', handleCredit)
debit.addEventListener('click', handleDebit)
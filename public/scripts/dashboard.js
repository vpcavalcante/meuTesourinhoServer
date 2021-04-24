const transactionsUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')
const form = document.querySelector('#form')
const inputTrasactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector("#amount")

const localStorageTransactions = JSON.parse(localStorage
    .getItem('transactions'))
let transactions = localStorage
    .getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID => {
    transactions = transactions.filter(transaction =>
        transaction.id !== ID)
    updateLocalStorage()
    init()
}

//função para add no DOM 
const addTransactionIntoDom = transaction => {
    //operador matemático verifica se o valor é + ou - e armazena o operador
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')
    li.classList.add(CSSClass);
    li.innerHTML = `
    ${transaction.name} 
        <span>${operator} R$ ${amountWithoutOperator}</span>
        <button class="delete-btn" 
        onClick="removeTransaction(${transaction.id})">
        x
        </button>
        `
    transactionsUl.prepend(li) //adiciona no último li

}
const getExpenses = transactionsAmounts => Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2)

const getIncome = transactionsAmounts => transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0)
    .toFixed(2)

const getTotal = transactionsAmounts => transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2)


const updateBalancesValues = () => {
    const transactionsAmounts = transactions.map(({
        amount
    }) => amount)

    const total = getTotal(transactionsAmounts)
    const income = getIncome(transactionsAmounts)
    const expense = getExpenses(transactionsAmounts)

    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`

}
const init = () => {
    transactionsUl.innerHTML = ''
    transactions.forEach(addTransactionIntoDom)
    updateBalancesValues()
}
init()

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(transactions))

}
//executa o preenchimento das apps qdo a página for carregada, add no DOM
const generateID = () => Math.round(Math.random() * 1000)

const addToTransactionsArray = (transactionName, transactionsAmounts) => {

    transactions.push({
        id: generateID(),
        name: transactionName,
        amount: Number(transactionsAmounts),
    })
}
const cleanInputs = () => {
    inputTrasactionName.value = ''
    inputTransactionAmount.value = ''
}
const handleFormSubmit = event => {
    event.preventDefault()

    const transactionName = inputTrasactionName.value.trim()
    const transactionsAmounts = inputTransactionAmount.value.trim()
    const isSomeInputEmpty = transactionName === '' || transactionsAmounts === ''

    if (isSomeInputEmpty) {
        alert("Por favor, preencha o nome e o valor da transação")
        return
    }

    addToTransactionsArray(transactionName, transactionsAmounts)
    init()
    updateLocalStorage()
    cleanInputs()


}

form.addEventListener('submit', handleFormSubmit)
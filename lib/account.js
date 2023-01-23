const Deposit = require('../lib/deposit.js')
const Withdrawal = require('../lib/withdrawal.js')

class Account {
  constructor() {
    this.balance = 0
    this.transactionHistory = []
  }

  accountBalance() {
    return this.balance
  }
}



// const deposit(depositAmount) => {
//   const newDeposit = new Deposit(depositAmount)
//   trasactionHistory.push(newDeposit)
//   updateAccountBalance(newDeposit)
// }


// function statement() {
//   trasactionHistory.forEach(transation => {
//     print ``
//   });
// }

module.exports = Account;

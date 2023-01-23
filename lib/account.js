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

  deposit(depositAmount) {
    const newDeposit = new Deposit(depositAmount)
    this.transactionHistory.push(newDeposit)
    // this.transactionHistory.forEach(transaction => {
      this.balance += newDeposit.depositAmount;
  }; 
};

//   withdraw(withdrawAmount)

// }

module.exports = Account;

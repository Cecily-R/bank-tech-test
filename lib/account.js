const Deposit = require('../lib/deposit.js')
const Withdrawal = require('../lib/withdrawal.js')

class Account {
  constructor () {
    this.balance = 0
    this.transactions = []
  }

  accountBalance () {
    return this.balance
  }

  deposit (depositAmount) {
    const newDeposit = new Deposit(depositAmount, this.balance)
    this.transactions.push(newDeposit)
    this.balance = newDeposit.updatedBalance()
  };

  withdraw (withdrawalAmount) {
    const newWithdrawal = new Withdrawal(withdrawalAmount, this.balance)
    this.transactions.push(newWithdrawal)
    this.balance = newWithdrawal.updatedBalance()
  };
};

module.exports = Account

const Deposit = require('../lib/deposit.js')
const Withdrawal = require('../lib/withdrawal.js')

class Account {
  constructor() {
    this.balance = 0
    this.transactions = []
  }

  accountBalance() {
    return this.balance
  }

  deposit(depositAmount) {
    const newDeposit = new Deposit(depositAmount);
    this.transactions.push(newDeposit)
    this.balance += newDeposit.depositAmount;
  }; 

  withdraw(withdrawalAmount) {
    const newWithdrawal = new Withdrawal(withdrawalAmount);
    this.transactions.push(newWithdrawal);
    this.balance -= newWithdrawal.withdrawnAmount;
  }

  transactionHistory() {
    this.transactions.map(transaction => {
      return `${transaction.date} || ${transaction.amount} || ${this.balance}`;
    });
  };
};


module.exports = Account;

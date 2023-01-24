class Withdrawal {
  constructor (amount, balance) {
    this.withdrawalAmount = amount
    this.date = new Date()
    this.balanceBeforeDeposit = balance
  }

  amount () {
    return this.withdrawalAmount
  };

  updatedBalance () {
    return this.balanceBeforeDeposit - this.withdrawalAmount
  }
};

module.exports = Withdrawal

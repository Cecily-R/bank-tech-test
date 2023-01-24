class Deposit {
  constructor (amount, balance) {
    this.depositAmount = amount
    this.date = new Date()
    this.balanceBeforeDeposit = balance
  }

  amount () {
    return this.depositAmount
  };

  updatedBalance () {
    return this.balanceBeforeDeposit + this.depositAmount
  }
};

module.exports = Deposit

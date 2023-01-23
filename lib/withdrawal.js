class Withdrawal {
  constructor(amount) {
    this.withdrawnAmount = amount;
    this.date = new Date();
  }

  amount() {
    return this.withdrawnAmount;
  };
};

module.exports = Withdrawal
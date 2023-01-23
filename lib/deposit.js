class Deposit {
  constructor(amount) {
    this.depositAmount = amount;
    this.date = new Date();
  }

  amount() {
    return this.depositAmount;
  };
};

module.exports = Deposit;
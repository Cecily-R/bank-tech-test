const Deposit = require('../lib/deposit.js')


beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Deposit", () => {
  describe("amount", () => {
    it ("returns the amount deposited", () => {
      const deposit = new Deposit(2500.00)

      expect(deposit.amount()).toEqual(2500.00)
    })

    it("returns the date of deposit", () => {
      const deposit = new Deposit(2500.00);
    
      expect(deposit.date).toEqual(new Date(2020, 3, 1))
      })
    })

  describe("updatedBalance", () => {
    it("returns updated balance following deposits", () => {
      const depositOne = new Deposit(2500.00, 0)
      const depositTwo = new Deposit(3000.00, 2500)
      
      expect(depositOne.updatedBalance()).toEqual(2500.00)
      expect(depositTwo.updatedBalance()).toEqual(5500.00)
    })
  })
})
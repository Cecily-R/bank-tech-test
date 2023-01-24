const Withdrawal = require('../lib/withdrawal.js')

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Withdrawal", () => {
  describe("amount", () => {
    it ("returns the amount withdrawn from account", () => {
      const withdrawal = new Withdrawal(346.83)

      expect(withdrawal.amount()).toEqual(346.83)
    })

    it("returns the date of deposit", () => {
      const withdrawal = new Withdrawal(346.83)
    
      expect(withdrawal.date).toEqual(new Date(2020, 3, 1))
    })
  })

  describe("updatedBalance", () => {
    it("returns the updated account balance following withdrawals", () => {
      const withdrawalOne = new Withdrawal(345.50, 0)
      const withdrawalTwo = new Withdrawal(12.00, -345.50)

      expect(withdrawalOne.updatedBalance()).toEqual(-345.50)
      expect(withdrawalTwo.updatedBalance()).toEqual(-357.50)
    })
  })
})
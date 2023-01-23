const Withdrawal = require('../lib/withdrawal.js')

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2020, 3, 1));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Withdrawal", () => {
  it ("returns the amount withdrawn from account", () => {
    const withdrawal = new Withdrawal(346.83)

    expect(withdrawal.amount()).toEqual(346.83)
  })

  it("returns the date of deposit", () => {
    const withdrawal = new Withdrawal(346.83)
    
    expect(withdrawal.date).toEqual(new Date(2020, 3, 1))
  })
})
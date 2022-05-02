import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("10에서 2를 나누면 5이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(10, 2)).toEqual(5);
  });
  test("10에서 0으로 나눌 수 없다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(10, 0)).toEqual("Divide by Zero");
  });
});
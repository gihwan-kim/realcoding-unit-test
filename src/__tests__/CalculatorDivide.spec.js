import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("10를 2으로 나누면 5이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(10, 2)).toEqual(5);
  });
  test("0으로 나누면 에러가 발생한다.", () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(2, 0)).toThrowError(DivideZeroError);
  });
});
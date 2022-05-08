import Calculator, { DivideZeroError } from "../../js/calculator/Calculator";

// hw 01
describe("음수 양수 판단,", () => {
    test("isNegatvie에 7을 넣으면 false  반환한다.", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(7)).toBeFalsy();
    });
    test("isNegatvie에 -3을 넣으면 true를 반환한다.", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(-3)).toBeTruthy();
    });
    test("isNegatvie에 0을 넣으면 ture가 아니다.", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(0)).not.toBeTruthy();
    });
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        const calculator = new Calculator();
        expect(calculator.getDate()).toBeInstanceOf(Date);
    });
});


// hw 02
beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한 번만 실행된다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

beforeEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
});


// extra hw
describe("가상 함수 테스트해보기", () => {
    function increment(... args) {
        var ret = 0;
        args.forEach(element => {
            ret += element
        });
        return ret;
    }
    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
        const mockFn = jest.fn();
        mockFn.mockImplementation(increment);
        mockFn(1,2,3)
        // Ensures that a mock function is called.
        expect(mockFn).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const mockFn = jest.fn();
        mockFn.mockImplementation(increment);
        mockFn(1,2,3)
        // Ensures that a mock function is called.
        expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
        const calculator = new Calculator();

        // Creates a mock function similar to jest.
        // fn but also tracks calls to object[methodName]
        const spyon = jest.spyOn(Math, "abs")

        calculator.abs(-10)
        // Ensures that a mock function is called.
        expect(spyon).toHaveBeenCalled();
    });
});
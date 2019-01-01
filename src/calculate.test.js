import { calculate } from "./calculate";

describe('FizzBuzz Logic', () => {
  it('should return Fizz for 3', () => {
    expect(calculate(3)).toEqual("Fizz");
  });

  it('should return Buzz for 5', () => {
    expect(calculate(5)).toEqual("Buzz");
  });

  it('should return input by default', () => {
    expect(calculate(1)).toEqual("1");
  });

  it('should return Fizz for divisible by 3', () => {
    expect(calculate(9)).toEqual("Fizz");
  });

  it('should return Buzz for divisible by 5', () => {
    expect(calculate(10)).toEqual("Buzz");
  });

  it('should return FizzBuzz for divisible by 3 and 5', () => {
    expect(calculate(15)).toEqual("FizzBuzz");
  });
});

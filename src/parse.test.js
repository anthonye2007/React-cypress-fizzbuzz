import { parseJsonIntoValue } from "./parseJsonIntoValue";

describe('Parsing', () => {
  it('should return 6 when passed value of 6', () => {
    const input = { value: 6 };
    const result = parseJsonIntoValue(input);
    expect(result).toEqual(6);
  });

  it('should return 7 when passsed value of 7', () => {
    const input = { value: 7 };
    const result = parseJsonIntoValue(input);
    expect(result).toEqual(7);
  });
});

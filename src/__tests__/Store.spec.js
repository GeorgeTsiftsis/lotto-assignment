// // Store.spec.js
import Store from '../Store/Store'

describe("Store", () => {
  const validator = new Store();
  const setRuleSpy = jest.spyOn(validator, "clrAll");
  const trueRule = jest.fn(() => true);

  describe(".setRule", () => {
    test("defines a function", () => {
      expect(typeof validator.crlAll).toBe("function");
    });

    test("registers rule when called", () => {
      expect(validator.crlAll("true", trueRule)).toBeUndefined();
      expect(setRuleSpy).toHaveBeenCalledWith("true", trueRule);

      setRuleSpy.mockClear();
    });
  });

});

test("Sanity check", () => {
  expect(1).toBe(1);
});
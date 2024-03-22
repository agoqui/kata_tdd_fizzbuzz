import { fizzBuzz } from "../src/fizzBuzz";

describe("TDD FizzBuzz kata", () => {
  it("Should return '0'", () => {
    const returnFizz = fizzBuzz();
    expect(returnFizz).toBe("0");
  });
  it("Should return '1' when number is 1 ", () => {
    const returnFizz = fizzBuzz(1);
    expect(returnFizz).toBe("1");
  });

  it.each`
    iteration | expectedFizzBuzz
    ${3}      | ${"Fizz"}
    ${9}      | ${"Fizz"}
    ${12}     | ${"Fizz"}
  `(
    "When Multiple of 3 return Fizz, Iteration: $iteration : $expectedFizzBuzz",
    ({ iteration, expectedFizzBuzz }) => {
      const returnFizz = fizzBuzz(iteration);
      expect(returnFizz).toBe(expectedFizzBuzz);
    }
  );
  it.each`
    iteration | expectedFizzBuzz
    ${5}      | ${"Buzz"}
    ${10}     | ${"Buzz"}
  `(
    "When Multiple of 5 return Buzz, Iteration: $iteration : $expectedFizzBuzz",
    ({ iteration, expectedFizzBuzz }) => {
      const returnFizz = fizzBuzz(iteration);
      expect(returnFizz).toBe(expectedFizzBuzz);
    }
  );

  it.each`
    iteration | expectedFizzBuzz
    ${15}     | ${"FizzBuzz"}
    ${30}     | ${"FizzBuzz"}
  `(
    "When Multiple of 5 and 3 return FizzBuzz, Iteration: $iteration : $expectedFizzBuzz",
    ({ iteration, expectedFizzBuzz }) => {
      const returnFizz = fizzBuzz(iteration);
      expect(returnFizz).toBe(expectedFizzBuzz);
    }
  );
});

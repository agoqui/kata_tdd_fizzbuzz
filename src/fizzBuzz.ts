const isMultipleOf3and5 = (value: number): boolean => {
  return value % 3 === 0 && value % 5 === 0;
};
const isMultipleOf3 = (value: number): boolean => {
  return value % 3 === 0;
};
const isMultipleOf5 = (value: number): boolean => {
  return value % 5 === 0;
};

export const fizzBuzz = (iteration?: number) => {
  if (!iteration) return "0";
  if (isMultipleOf3and5(iteration)) return "FizzBuzz";
  if (isMultipleOf3(iteration)) return "Fizz";
  if (isMultipleOf5(iteration)) return "Buzz";
  return `${iteration}`;
};

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
// hack until we can upgrade to react@16.9.0
const originalError = console.error;
beforeAll(() => {
  // this is here to silence a warning temporarily
  // we'll fix it in the next exercise
  jest.spyOn(console, "error").mockImplementation((...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Please upgrade to at least react-dom@16.9.0")
    ) {
      return;
    }
    return originalError.call(console, args);
  });
});

afterAll(() => {
  console.error.mockRestore();
});

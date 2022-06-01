const index = require('../src/index');


test('Test capitalize', () => {
  expect(index.capitalize("homework")).toBe("Homework");
  expect(index.capitalize("happy birthday")).toBe("Happy birthday");
  expect(index.capitalize(" do you understand")).toBe(" do you understand");

})

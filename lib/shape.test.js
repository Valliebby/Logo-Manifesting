const {Circle, Square, Triangle} = require('./shape');

test('test color for circle class', () => {
    const shape = new Circle()
    shape.colorChoice('pink')
  expect(shape.color).toBe('pink');
});

test('test color for square class', () => {
    const shape = new Square()
    shape.colorChoice('pink')
  expect(shape.color).toBe('pink');
});

test('test color for triangle class', () => {
    const shape = new Triangle()
    shape.colorChoice('pink')
  expect(shape.color).toBe('pink');
});
import test from 'node:test';
import assert from 'node:assert';
import { calculator } from './calculator.js';

test('Calculator - add', () => {
  calculator.clearHistory();
  assert.strictEqual(calculator.add(2, 3), 5);
});

test('Calculator - subtract', () => {
  calculator.clearHistory();
  assert.strictEqual(calculator.subtract(5, 3), 2);
});

test('Calculator - multiply', () => {
  calculator.clearHistory();
  assert.strictEqual(calculator.multiply(2, 3), 6);
});

test('Calculator - divide', () => {
  calculator.clearHistory();
  assert.strictEqual(calculator.divide(6, 3), 2);
});

test('Calculator - divide by zero throws error', () => {
  calculator.clearHistory();
  assert.throws(() => calculator.divide(5, 0), /Division by zero/);
});

test('Calculator - history', () => {
  calculator.clearHistory();
  calculator.add(2, 3);
  const history = calculator.getHistory();
  assert.deepStrictEqual(history[0], { operation: 'add', a: 2, b: 3, result: 5 });
});

test('Calculator - clear history', () => {
  calculator.clearHistory();
  calculator.add(1, 2);
  calculator.clearHistory();
  assert.strictEqual(calculator.getHistory().length, 0);
});
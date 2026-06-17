import { describe, it, expect, beforeEach } from 'vitest';
import { calculator } from './calculator.js';

describe('Calculator', () => {
  beforeEach(() => {
    calculator.clearHistory();
  });

  describe('Basic operations', () => {
    it('should add two numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 5)).toBe(5);
    });

    it('should subtract two numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(1, 1)).toBe(0);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-2, 3)).toBe(-6);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
      expect(calculator.divide(5, 2)).toBe(2.5);
      expect(calculator.divide(0, 5)).toBe(0);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
  });

  describe('History', () => {
    it('should store operations history', () => {
      calculator.add(2, 3);
      calculator.subtract(5, 1);
      calculator.multiply(2, 4);
      
      const history = calculator.getHistory();
      expect(history).toHaveLength(3);
      expect(history[0]).toEqual({ operation: 'add', a: 2, b: 3, result: 5 });
      expect(history[1]).toEqual({ operation: 'subtract', a: 5, b: 1, result: 4 });
      expect(history[2]).toEqual({ operation: 'multiply', a: 2, b: 4, result: 8 });
    });

    it('should clear history', () => {
      calculator.add(1, 2);
      calculator.add(3, 4);
      expect(calculator.getHistory()).toHaveLength(2);
      
      calculator.clearHistory();
      expect(calculator.getHistory()).toHaveLength(0);
    });

    it('should record result of division', () => {
      calculator.divide(10, 2);
      const history = calculator.getHistory();
      expect(history[0]).toEqual({ operation: 'divide', a: 10, b: 2, result: 5 });
    });
  });
});

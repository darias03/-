export const calculator = {
  history: [],

  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    const result = a + b;
    this.history.push({ operation: 'add', a, b, result });
    return result;
  },

  subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    const result = a - b;
    this.history.push({ operation: 'subtract', a, b, result });
    return result;
  },

  multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    const result = a * b;
    this.history.push({ operation: 'multiply', a, b, result });
    return result;
  },

  divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Arguments must be numbers');
    }
    if (b === 0) {
      throw new Error('Division by zero');
    }
    const result = a / b;
    this.history.push({ operation: 'divide', a, b, result });
    return result;
  },

  getHistory() {
    return [...this.history];
  },

  clearHistory() {
    this.history = [];
  }
};

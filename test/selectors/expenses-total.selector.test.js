import expenseTotal from '../../src/selectors/expenses-total.selector';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = expenseTotal([]);

    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = expenseTotal([expenses[0]]);

    expect(result).toBe(1.95);
});

test('should correctly add up a mutiple expense', () => {
    const result = expenseTotal(expenses);

    expect(result).toBe(1141.95);
});
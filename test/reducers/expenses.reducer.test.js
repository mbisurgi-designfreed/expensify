import expenses from '../fixtures/expenses';
import expensesReducer from '../../src/reducers/expenses.reducer';

test('should set default filter values', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('should add an expense', () => {
    const expense = {
        id: 5,
        description: 'Gas bill',
        note: '',
        amount: 150.00,
        createdAt: 1000
    }

    const state = expensesReducer(expenses, {
        type: 'add_expense',
        payload: expense
    });

    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'edit_expense',
        payload: {
            id: expenses[0].id,
            expense: { amount: 200 }
        }
    });

    expect(state[0].amount).toBe(200);
});

test('should not edit expenses if id not fount', () => {
    const state = expensesReducer(expenses, {
        type: 'edit_expense',
        payload: {
            id: 5,
            expense: { amount: 200 }
        }
    });

    expect(state).toEqual(expenses);
});

test('should remove an expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'remove_expense',
        payload: expenses[1].id
    });

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'remove_expense',
        payload: 5
    });

    expect(state).toEqual(expenses);
});
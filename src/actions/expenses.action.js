import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'add_expense',
    payload: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const editExpense = (id, expense) => ({
    type: 'edit_expense',
    payload: { id, expense }
});

export const removeExpense = (id) => ({
    type: 'remove_expense',
    payload: id
});
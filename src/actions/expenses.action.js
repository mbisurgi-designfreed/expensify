import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'add_expense',
    payload: expense
});

export const editExpense = (id, expense) => ({
    type: 'edit_expense',
    payload: { id, expense }
});

export const removeExpense = (id) => ({
    type: 'remove_expense',
    payload: id
});

export const startAddExpense = (data) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = data;

        const expense = { description, note, amount, createdAt };

        return database.ref('expenses')
            .push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }));
            });
    };
};
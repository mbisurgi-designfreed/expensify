import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from '../../src/firebase/firebase';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../src/actions/expenses.action';

const createMockStore = configureMockStore([thunk]);

test('should setup add expense action object with provided values', () => {
    const expense = {
        id: '1',
        description: 'Rent',
        amount: 1000.99,
        createdAt: 1000,
        note: 'Rent from this month'
    };

    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'add_expense',
        payload: {
            id: expect.any(String),
            ...expense
        }
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: 'Rent',
        amount: 1000.99,
        createdAt: 1000,
        note: 'Rent from this month'
    };

    store.dispatch(startAddExpense(expense))
        .then(() => {
            const action = store.getActions()[0];

            expect(action).toEqual({
                type: 'add_expense',
                payload: {
                    id: expect.any(String),
                    ...expense
                }
            });

            database.ref(`expenses/${action.payload.id}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toEqual(expense);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
});

test('should add expense with defaults to database and store', () => {
    const store = createMockStore({});
    const expense = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };

    store.dispatch(startAddExpense({}))
        .then(() => {
            const action = store.getActions()[0];

            expect(action).toEqual({
                type: 'add_expense',
                payload: {
                    id: expect.any(String),
                    ...expense
                }
            });

            database.ref(`expenses/${action.payload.id}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toEqual(expense);
                    done();
                })
                .catch((err) => {
                    done(err);
                });
        });
});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'add_expense',
//         payload: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: ''
//         }
//     });
// });

test('should setup edit expense action object', () => {
    const action = editExpense(1001, {
        description: 'Rent',
        amount: 150.55
    });

    expect(action).toEqual({
        type: 'edit_expense',
        payload: {
            id: 1001,
            expense: {
                description: 'Rent',
                amount: 150.55
            }
        }
    });
});

test('should setup remove expense action object', () => {
    const action = removeExpense(1001);

    expect(action).toEqual({
        type: 'remove_expense',
        payload: 1001
    });
});

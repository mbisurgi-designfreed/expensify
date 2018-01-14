import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'add_expense',
    payload: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id, expense) => ({
    type: 'edit_expense',
    payload: { id, expense }
});

const removeExpense = (id) => ({
    type: 'remove_expense',
    payload: id
});

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'add_expense':
            return [...state, action.payload];
        case 'edit_expense':
            return state.map((expense) => {
                if (expense.id === action.payload.id) {
                    return { ...expense, ...action.payload.expense.amount };
                }

                return expense;
            });
        case 'remove_expense':
            return state.filter(({ id }) => id !== action.payload);
        default:
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'edit_text_filter',
    payload: text
});

const sortByAmount = () => ({
    type: 'sort_by_amount'
});

const sortByDate = () => ({
    type: 'sort_by_date'
});

const setStartDate = (date) => ({
    type: 'set_start_date',
    payload: date
});

const setEndDate = (date) => ({
    type: 'set_end_date',
    payload: date
});

const filtersReducer = (state = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined }, action) => {
    switch (action.type) {
        case 'edit_text_filter':
            return { ...state, text: action.payload };
        case 'sort_by_amount':
            return { ...state, sortBy: 'amount' };
        case 'sort_by_date':
            return { ...state, sortBy: 'date' };
        case 'set_start_date':
            return { ...state, startDate: action.payload };
        case 'set_end_date':
            return { ...state, endDate: action.payload };
        default:
            return state;
    }
};

const filteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }

        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const expenses = filteredExpenses(state.expenses, state.filters);

    console.log(expenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Alquiler ene-18', amount: 1500, createdAt: -21000 }));
const expense2 = store.dispatch(addExpense({ description: 'Expensas feb-18', amount: 1350, createdAt: -1000 }));

// store.dispatch(removeExpense(expense1.payload.id));

store.dispatch(editExpense(expense2.payload.id, { amount: 1750 }));

// store.dispatch(setTextFilter('alquiler'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(350));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(150));
// store.dispatch(setEndDate());
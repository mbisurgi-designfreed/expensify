const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'add_expense':
            return [...state, action.payload];
        case 'edit_expense':
            return state.map((expense) => {
                if (expense.id === action.payload.id) {
                    return { ...expense, ...action.payload.expense };
                }

                return expense;
            });
        case 'remove_expense':
            return state.filter(({ id }) => id !== action.payload);
        default:
            return state;
    }
};

export default expensesReducer;
import _ from 'lodash';

const expensesTotal = (expenses) => {
    return _.reduce(expenses, (sum, expense) => {
        return sum + expense.amount;
    }, 0);
};

export default expensesTotal;
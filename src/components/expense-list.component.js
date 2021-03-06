import React from 'react';
import { connect } from 'react-redux';

import expensesSelector from '../selectors/expenses.selector';

import ExpenseListItem from './expense-list-item.component';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return { expenses: expensesSelector(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../components/expense-form.component';

import { startAddExpense } from '../actions/expenses.action';

export class AddExpensePage extends Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { startAddExpense })(AddExpensePage);

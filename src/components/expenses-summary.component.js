import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import expensesTotal from '../selectors/expenses-total.selector';
import expensesSelector from '../selectors/expenses.selector';

export class ExpensesSummary extends React.Component {
    renderSummary = () => {
        const expense = this.props.count === 1 ? 'expense' : 'expenses';
        const currency = numeral(this.props.total).format('$0,0.00');

        return (
            <h1>Viewing {this.props.count} {expense} totalling {currency}</h1>
        );
    };

    render() {
        return (
            this.renderSummary()
        )
    }
}

const mapStateToProps = (state) => {
    return { count: expensesSelector(state.expenses, state.filters).length, total: expensesTotal(expensesSelector(state.expenses, state.filters)) };
};

export default connect(mapStateToProps)(ExpensesSummary);
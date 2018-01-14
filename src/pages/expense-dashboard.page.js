import React from 'react';

import ExpenseList from '../components/expense-list.component';
import ExpenseListFilters from '../components/expense-list-filters.component';
import ExpensesSummary from '../components/expenses-summary.component';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters /> 
        <ExpenseList /> 
    </div>
);

export default ExpenseDashboardPage;
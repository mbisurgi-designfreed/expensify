import React from 'react';

import ExpenseList from '../components/expense-list.component';
import ExpenseListFilters from '../components/expense-list-filters.component';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters /> 
        <ExpenseList /> 
    </div>
);

export default ExpenseDashboardPage;
import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../src/components/expenses-summary.component';
import expensesTotal from '../../src/selectors/expenses-total.selector';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary correctly with more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary count={expenses.length} total={expensesTotal(expenses)} /> );

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with  one expense', () => {
    const wrapper = shallow(<ExpensesSummary count={[expenses[0]]} total={expensesTotal([expenses[0]])} /> );

    expect(wrapper).toMatchSnapshot();
});
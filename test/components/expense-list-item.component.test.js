import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../src/components/expense-list-item.component';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly with expense', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense} />);

    expect(wrapper).toMatchSnapshot();
});
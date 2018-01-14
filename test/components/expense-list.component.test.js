import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../src/components/expense-list.component';
import expenses from '../fixtures/expenses';

test('should render ExpenseList correctly with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList correctly with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();
});

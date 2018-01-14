import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseListFilters } from '../../src/components/expense-list-filters.component';
import { defaultFilters, filters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters filters={defaultFilters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />);
});

test('should render ExpenseListFilters with default filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with filters correctly', () => {
    wrapper.setProps({ filters });

    expect(wrapper).toMatchSnapshot();
});

test('should handle onTextChanged', () => {
    const value = 'bills';

    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenLastCalledWith('bills');
});

test('should sort by date', () => {
    const value = 'date';

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';

    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle onDatesChange', () => {
    const dates = {
        startDate: filters.startDate,
        endDate: filters.endDate
    };

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(dates);

    expect(setStartDate).toHaveBeenLastCalledWith(dates.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(dates.endDate);
});

test('should handle onCalendarFocusChanged', () => {
    const focused = 'endDate';

    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused);

    expect(wrapper.state('calendarFocused')).toBe(focused);
});

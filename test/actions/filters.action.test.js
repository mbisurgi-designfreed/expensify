import moment from 'moment';

import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../src/actions/filters.action';

test('should generate set text filter action object with provided value', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: 'edit_text_filter',
        payload: 'rent'
    });
});

test('should generate set text filter action object with default values', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'edit_text_filter',
        payload: ''
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'sort_by_amount'
    });
});

test('should generate sort by date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'sort_by_date'
    });
});

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'set_start_date',
        payload: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'set_end_date',
        payload: moment(0)
    });
});
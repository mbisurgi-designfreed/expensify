import moment from 'moment';

import filtersReducer from '../../src/reducers/filters.reducer';

test('should set default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'sort_by_amount'
    });

    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const state = filtersReducer({ sortBy: 'amount' }, {
        type: 'sort_by_date'
    });

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'edit_text_filter',
        payload: 'rent'
    });

    expect(state.text).toBe('rent');
});

test('should set start date filter', () => {
    const state = filtersReducer(undefined, {
        type: 'set_start_date',
        payload: moment(0)
    });

    expect(state.startDate).toEqual(moment(0));
});

test('should set end date filter', () => {
    const state = filtersReducer(undefined, {
        type: 'set_end_date',
        payload: moment(0)
    });

    expect(state.endDate).toEqual(moment(0));
});
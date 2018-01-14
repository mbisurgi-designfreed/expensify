export const setTextFilter = (text = '') => ({
    type: 'edit_text_filter',
    payload: text
});

export const sortByAmount = () => ({
    type: 'sort_by_amount'
});

export const sortByDate = () => ({
    type: 'sort_by_date'
});

export const setStartDate = (date) => ({
    type: 'set_start_date',
    payload: date
});

export const setEndDate = (date) => ({
    type: 'set_end_date',
    payload: date
});
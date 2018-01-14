import moment from 'moment';

const filtersReducer = (state = { text: '', sortBy: 'date', startDate: moment().startOf('month'), endDate: moment().endOf('month') }, action) => {
    switch (action.type) {
        case 'edit_text_filter':
            return { ...state, text: action.payload };
        case 'sort_by_amount':
            return { ...state, sortBy: 'amount' };
        case 'sort_by_date':
            return { ...state, sortBy: 'date' };
        case 'set_start_date':
            return { ...state, startDate: action.payload };
        case 'set_end_date':
            return { ...state, endDate: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;
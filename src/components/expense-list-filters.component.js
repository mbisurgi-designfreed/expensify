import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters.action';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    sortBy = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        }

        if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    onTextChanged = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onDatesChanged = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onCalendarFocusChanged = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChanged} />
                <select value={this.props.filters.sortBy} onChange={this.sortBy}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker startDate={this.props.filters.startDate} endDate={this.props.filters.endDate} onDatesChange={this.onDatesChanged} focusedInput={this.state.calendarFocused} onFocusChange={this.onCalendarFocusChanged} startDateId="start" endDateId="end" numberOfMonths={1} isOutsideRange={() => false} showClearDates />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { filters: state.filters };
}

export default connect(mapStateToProps, { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate })(ExpenseListFilters);
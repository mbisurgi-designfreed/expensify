import 'react-dates/initialize';

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            note: props.expense ? props.expense.note : '',
            error: ''
        }
    }

    onDescriptionChanged = (e) => {
        const description = e.target.value;

        this.setState(() => ({ description }));
    };

    onAmountChanged = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChanged = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onCalendarFocusChanged = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onNoteChanged = (e) => {
        const note = e.target.value;

        this.setState(() => ({ note }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.setState(() => ({ error: '' }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.description} onChange={this.onDescriptionChanged} placeholder="Description" autoFocus />
                    <input type="text" value={this.state.amount} onChange={this.onAmountChanged} placeholder="Amount" />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChanged} focused={this.state.calendarFocused} onFocusChange={this.onCalendarFocusChanged} numberOfMonths={1} isOutsideRange={() => false} />
                    <textarea value={this.state.note} onChange={this.onNoteChanged} placeholder="Add a note for your expense (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import configureStore from './store/configureStore';

import { addExpenses, addExpense } from './actions/expenses.action';
import { setTextFilter } from './actions/filters.action';

import expensesSelector from './selectors/expenses.selector';

import AppRouter from './routers/app.router';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 1250 }));
store.dispatch(addExpense({ description: 'Rent', amount: 575, createdAt: 19500 }));

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));


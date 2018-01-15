import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';

import configureStore from './store/configureStore';

import { addExpenses, addExpense } from './actions/expenses.action';
import { setTextFilter } from './actions/filters.action';

import expensesSelector from './selectors/expenses.selector';

import AppRouter from './routers/app.router';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));


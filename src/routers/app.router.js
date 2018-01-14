import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

import Header from '../components/header.component';
import ExpenseDashboardPage from '../pages/expense-dashboard.page';
import AddExpensePage from '../pages/add-expense.page';
import EditExpensePage from '../pages/edit-expense.page';
import HelpPage from '../pages/help.page';
import NotFoundPage from '../pages/not-found.page';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={ExpenseDashboardPage} />
                <Route path="/add" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
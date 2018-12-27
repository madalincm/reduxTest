import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFitlers from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => {
    return(
        <div>
            <ExpensesSummary />
            <ExpenseListFitlers />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboardPage;
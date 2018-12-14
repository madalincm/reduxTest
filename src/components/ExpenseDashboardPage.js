import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFitlers from './ExpenseListFilter';

const ExpenseDashboardPage = () => {
    return(
        <div>
            <ExpenseListFitlers />
            <ExpenseList />
        </div>
    );
};

export default ExpenseDashboardPage;
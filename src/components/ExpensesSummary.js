import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from './../selectors/expenses';
import getExpenesesTotal from './../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
    return(
        <div>
            <h1>
                Viewing {props.expensesCount} {expenseWord} totaling {formatedExpensesTotal}
            </h1>            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expensesTotal: getExpenesesTotal(getVisibleExpenses(state.expenses, state.filters)),
        expensesCount: getVisibleExpenses(state.expenses, state.filters).length
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
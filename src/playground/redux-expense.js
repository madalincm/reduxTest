import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE Action
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    };
};
//REMOVE_EXPENSE Action
const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    };
};
//EDIT_EXPENSE Action
const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates, updates
    };
};
//Remove_EXPENSES Action
const removeExpeneses = () => {
    return {
        type: 'REMOVE_EXPENSES'
    };
};
//SET_TEXT_FILTER Action
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    };
};
//SORT_BY_AMOUNT Action
const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};
//SORT_BY_DATE Action
const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};
//SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};
//SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    };
};

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id !== action.id
            });
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        case 'REMOVE_EXPENSES' :
            return [];
        default:
            return state; 
    };
};

//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch (action.type){
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT' :
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE' :
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    };
};
//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 :-1;
        }
    });
};


//Store cretion
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

})


const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: 2000}));
const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: 'rent', amount: 900, createdAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// //store.dispatch(removeExpeneses());

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1000));



const demoState = {
    expenses: [{
        id: 'testId',
        description: 'test rent',
        note: 'this is the final payment for this address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

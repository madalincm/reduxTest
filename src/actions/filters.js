//SET_TEXT_FILTER Action
export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text: text
    };
};
//SORT_BY_AMOUNT Action
export const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    };
};
//SORT_BY_DATE Action
export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    };
};
//SET_START_DATE
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate: startDate
    };
};
//SET_END_DATE
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate: endDate
    };
};
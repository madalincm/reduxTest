import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>Edititng the expense from id of {props.match.params.id}</div>
    );
};

export default EditExpensePage;
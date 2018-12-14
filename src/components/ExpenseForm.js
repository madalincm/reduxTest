import React, { Component } from 'react';

class ExpenseForm extends Component {
    state = {
        description: '',
        amount: '',
        note: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        }) 
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => {
                return {
                    amount
                }
            })
        }

    }
    onNoteChage = (e) => {
        console.log('test');
        const note = e.target.value;
        this.setState(() => {
            return {
                note
            }
        })
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChage}

                    >
                    </textarea>
                    <button>Add Expense</button>

                </form>
            </div>
        );
    }
}

export default ExpenseForm;


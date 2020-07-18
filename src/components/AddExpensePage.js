import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    buttonLabel='Add Expense'
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProp = (dispatch) =>({
        addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProp)(AddExpensePage)
import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
            <div className="list-body">
                    {props.expenses.length !== 0 ? props.expenses.map((expense) =>
                    <ExpenseListItem {...expense} key={expense.id} />) 
                : <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div> 
                    }
            </div>
    </div>
)
//function that map store state to the props of the components
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

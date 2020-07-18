import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses.length !== 0 ? props.expenses.map((expense) =>
             <ExpenseListItem {...expense} key={expense.id} />) 
        : <p>No expenses found!!</p>}
    </div>
)
//function that map store state to the props of the components
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)

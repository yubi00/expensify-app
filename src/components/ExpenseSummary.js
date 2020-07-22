import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import getVisibleExpenses from '../selectors/expenses'
import getTotalExpensess from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
            <div className="page-header">
                <div className="content-container">
                    {expensesCount !== 0 && <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span> {numeral(expensesTotal/100).format('$0,0.00')}</span></h1>}
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>    
                </div>
            </div>
        )
}
const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getTotalExpensess(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)


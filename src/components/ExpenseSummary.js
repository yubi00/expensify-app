import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getTotalExpensess from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
            <div>
                {expensesCount !== 0 && <h3>Viewing {expensesCount} {expenseWord} totalling {numeral(expensesTotal/100).format('$0,0.00')}</h3>}
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


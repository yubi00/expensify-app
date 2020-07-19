import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'

test('should return the sum of all expenes', () => {
    const sum = getExpensesTotal(expenses)
    expect(sum).toBe(4100)
})

test('should return 0 for no expenses', () => {
    const altexpenses = []
    const sum = getExpensesTotal(altexpenses)
    expect(sum).toBe(0)
})

test('should add up single expense', () => {
    const sum = getExpensesTotal([expenses[0]])
   expect(sum).toBe(1500)
})

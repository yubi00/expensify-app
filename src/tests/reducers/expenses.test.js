import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//should add an expense
test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'gas bill',
        amount: 200,
        note: 'gas bill for this month',
        createdAt: moment()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

//should update an expense
test('should  update an expense', () => {
    const updates = {
        note: 'a new note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }

    const state = expensesReducer(expenses, action)
    expect(state[0].note).toBe('a new note')
})
//should not udate an expense if not found
test('should not update an expense if id not found', () =>{
    const updates = {
        description: 'changed room rent',
        amount: 700
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})
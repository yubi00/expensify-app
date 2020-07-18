import { createStore , combineReducers } from 'redux'
import {v4 as uuid} from 'uuid'

//ADD_EXPENSE
const addExpense = (
    { 
        description = '',
        note = '',
        amount=0, 
        createdAt=0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = { }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        
        case 'REMOVE_EXPENSE':
            return state.filter(( {id} ) => id !== action.id )
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id ) {
                    return {...expense, ...action.updates}
                } else {
                    return state
                }
            })
        default: 
            return state
    }
}

//Filters actions generators
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



const filtersReducerInitialState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerInitialState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text }
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'}
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state
    }
}

//get visible expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate
        const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'rent',amount: 1000, createdAt: 5000}))
const expenseTwo = store.dispatch(addExpense({description: 'cofee', amount: 300, createdAt: 1000}))
store.dispatch(addExpense({ description: 'car', amount: 8000, createdAt: 2500}))
// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000 }))


store.dispatch(sortByDate())
store.dispatch(sortByAmount())

// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(12500))

// store.dispatch(setTextFilter('COF'))

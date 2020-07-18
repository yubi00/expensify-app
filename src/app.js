import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'

const store = configureStore()
store.dispatch(addExpense({ description: 'water bill', amount: 200, createdAt: 500}))
store.dispatch(addExpense({ description: 'gas bill', amount: 500, createdAt: 1000}))
store.dispatch(addExpense({ description: 'Winter jacket', amount: 150, createdAt: 10000}))
store.dispatch(addExpense({ description: 'puffer jacket', amount: 250, createdAt: 3000}))

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))
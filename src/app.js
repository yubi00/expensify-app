import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(<p>Loading....</p>, document.querySelector('#app'))

store.dispatch(startSetExpenses())
.then(() => {
    ReactDOM.render(jsx, document.querySelector('#app'))
})
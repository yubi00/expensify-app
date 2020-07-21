import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Header from '../components/Header'
import ExpensifyDashboardPage from '../components/ExpensifyDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/dashboard" component={ExpensifyDashboardPage} />
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>       
    </Router>
)

export default AppRouter

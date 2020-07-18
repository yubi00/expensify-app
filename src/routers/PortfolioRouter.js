import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../portfolio-components/Header'
import Home from '../portfolio-components/Home'
import Portfolio from '../portfolio-components/Portfolio'
import Contact from '../portfolio-components/Contact'
import PageNotFound from '../portfolio-components/PageNotFound'
import IndividualPortfolio from '../portfolio-components/IndividualPortfolio'

const PortFolioRouter = () => (
   <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/portfolio" component={Portfolio} exact/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio/:id" component={IndividualPortfolio}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
   </Router>
)

export default PortFolioRouter
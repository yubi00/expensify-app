import React from 'react'
import { NavLink } from 'react-router-dom'

const Portfolio = () => (
    <div>
        <h1>Here are some of my works</h1>
        <div>
            <NavLink to="/portfolio/1" activeClassName="is-portfolio-active">Item One</NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-portfolio-active">Item Two</NavLink>
        </div>
    </div>
)

export default Portfolio
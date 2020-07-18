import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div>
        <h1>Yubi Portfolio</h1>
        <NavLink to="/" activeClassName="is-portfolio-active" exact>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="is-portfolio-active">Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="is-portfolio-active">Contact</NavLink>
    </div>
)

export default Header
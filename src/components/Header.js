import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact>dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header
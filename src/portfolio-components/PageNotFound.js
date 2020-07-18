import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
    <div>
        <h1>ERROR 404</h1>
        <Link to="/">Go to Home</Link>
    </div>
)

export default PageNotFound
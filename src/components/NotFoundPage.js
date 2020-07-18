import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h1>ERROR 404</h1>
        <Link to="/">Go home</Link>
    </div>
)

export default NotFoundPage
//component that renders that render another component
//reuse code
//render hijacking
//props manipulation
//abstract state
import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> {props.info} </p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    //return higher order component
    return (props) => (
        <div>
           { props.isAuthenticated ?
                 <div>
                    <p>Welcome. You are authenticated</p>
                    <WrappedComponent {...props}/>
                 </div> 
            : <p>Authentication failed. Please login to view info</p>} 
           
        </div>
    )
    
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'))
import React from 'react'

const IndividualPortfolio = (props) => {
    console.log(props)
    return (
        <div>
            <h1>A Thing I've done</h1>
            {props.match.params.id && <h2>This item is for the id of {props.match.params.id} </h2>}
        </div>
    )
}

export default IndividualPortfolio
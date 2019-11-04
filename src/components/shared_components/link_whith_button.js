import React from 'react'

const LinkWithButton = (props) => {
    
    return (
        <div>
            <p>
                <a href={props.link}>Click is here... more Informations.</a>
            </p>
            <button className="button is-primary" onClick={props.event}>Click is Here</button>
        </div>
    )
}


export default LinkWithButton
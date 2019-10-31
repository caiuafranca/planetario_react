import React from 'react'

const LinkWithButton = (props) => {
    return (
        <div>
            <p>
                <a href={props.link}>Clique para Maiores Informações</a>
            </p>
            <button className="button is-primary" onClick={props.event}>Clique para...</button>
        </div>
    )
}


export default LinkWithButton
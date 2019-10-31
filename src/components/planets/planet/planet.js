import React from 'react'
import LinkWithButton from '../../shared_components/link_whith_button'

const ShowMessage = () =>{
    alert("Clicado No Planeta")
}

const Planet = (props) => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-4">{props.nome}</h1>
                <img src="https://via.placeholder.com/200" alt={props.nome} />
                <p>{props.description}</p>
                <LinkWithButton link={props.link} event={ShowMessage}/>
            </div>
        </section>
    )
}
export default Planet
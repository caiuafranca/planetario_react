import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

const Planet = (props) => {
    return (
        <section class="section">
            <div class="container">
                <h1 class="title is-4">{props.nome}</h1>
                <img src="https://via.placeholder.com/200" alt="Mercurio Planeta 1" />
                <LoremIpsum p={2}/>
            </div>
        </section>
    )
}
export default Planet
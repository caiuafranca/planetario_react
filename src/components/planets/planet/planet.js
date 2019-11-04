import React from 'react'
import LinkWithButton from '../../shared_components/link_whith_button'
import ImageDescription from '../../shared_components/image_description'

const ShowMessage = () =>{
    alert("Clicado No Planeta")
}

const Planet = (props) => {

    const namesSatelites = ['a', 'b', 'c']

    const satellities = namesSatelites.map( (n) => 
        <li>Satellite {n}</li>
    )

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-4">{props.nome}</h1>
                <ImageDescription  img="https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg" />
                <p>
                    <h4 className="title is-5">Description</h4>
                </p>
                <p>
                    {props.description}
                </p>
                <LinkWithButton link={props.link} event={ShowMessage}/>
                <br/>
                <h4 className="title is-5">Satellities</h4>
                <ul>
                    {satellities}
                </ul>
            </div>
        </section>
    )
}
export default Planet
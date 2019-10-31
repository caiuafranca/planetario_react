import React, {Fragment} from 'react'
import Planet from './planet/planet'


const Planets = () =>{
    
    return(
        <Fragment>
            <Planet 
                nome="Jupiter" 
                description="Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
                             It is a gas giant with a mass one-thousandth that of the Sun, 
                             but two-and-a-half times that of all the other planets in the Solar System combined. 
                             Jupiter has been known to astronomers since antiquity.
                             "
                link="https://en.wikipedia.org/wiki/Jupiter" 
            />        
        </Fragment>
    )
}

export default Planets
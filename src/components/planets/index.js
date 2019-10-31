import React, {fragments} from 'react'
import Planet from './planet/planet'


const Planets = () =>{
    return(
        <fragments>
            <Planet nome="Jupiter"/>
            <Planet nome="Venus"/>
            <Planet nome="Terra"/>
            <Planet nome="Plutão"/>           
        </fragments>
    )
}

export default Planets
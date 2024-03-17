import React from "react";
import "./Pokecard.css";

const Pokecard = ({data}) => {

    const API_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    return(
        <div>
    
            {data.map(i => (
            
            <div class="Pokecard">
                <h4>{i.name}</h4>
                <img className="Pokecard-image" src={`${API_URL}${i.id}.png`} />
                <p> Type: {i.type}</p>
                <p> Exp: {i.base_experience}</p>
            </div>

            ))}
            

        </div>
    )
}



export default Pokecard

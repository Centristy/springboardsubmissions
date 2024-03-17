import React from "react";
import data from "./data.js";
import Pokecard from './Pokecard.js';
import "./Pokedex.css";

function Pokedex() {
    return (
        <div class="Pokedex">
        <Pokecard data={data} />
        </div>
    )
}

export default Pokedex;



import { useEffect, useState } from "react"
import { getPokemons } from "../../API/RequestPokemon"


export default function CompCard(props) {
    const [pokemon, set_pokemon] = useState("")

    useEffect(() => {
        console.log("props card:", props.poke.url)


        getPokemons(props.poke.url, set_pokemon)
            console.log("effectCard:", pokemon)

    }, [props.poke])



    return(
        <div>
            <p>{pokemon !== "" ? pokemon.name : ''}</p>
            <img src={pokemon !== "" ? pokemon.sprites.front_default : ''} />

        </div>
    )
}
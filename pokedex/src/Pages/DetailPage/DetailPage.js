import { StyledDetalhes } from "./style"
import { IrParaInicio } from "../../Routes/coordinator"
import { useHistory } from "react-router-dom"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext, useState, useEffect } from "react"
import { getPokemons } from "../../API/APIs"


export default function DetailPage() {
    const {states, setters} = useContext(GlobalStateContext)
    const history = useHistory()

    const [detalhes, set_detalhes] = useState()

    const get_url = `https://pokeapi.co/api/v2/pokemon/${states.urlPokeID}`
    

    useEffect(() => {
        get_PokemonGeral(get_url, set_detalhes)
    }, [])

    return(
        <StyledDetalhes>
            <div className="PokeName">
                {detalhes && detalhes.name}
            </div>
            <div className="PokeDates">
                <div className="PokeImage">

                    <div className="PokeImage_front"> 
                        <img alt="nomeFront" src={detalhes && detalhes.sprites.front_default} />
                    </div>

                    <div className="PokeImage_back">
                        <img alt="nomeFront" src={detalhes && detalhes.sprites.back_default} />  
                    </div>

                    <div className="ButtonToBack">
                        <button onClick={() => IrParaInicio(history)}> Voltar </button>
                    </div>

                </div>
                <div className="PokeStats">
                    {detalhes && detalhes.types.map((type) => {
                            return <h5 key={type.type.name}> Type: {type.type.name} </h5>
                    })}

                    {detalhes && detalhes.stats.map((stat) => {
                        return <p key={stat.stat.name}><strong>{stat.stat.name}: </strong> {stat.base_stat}</p>
                    })}
                </div>
                <div className="PokeSkills">
                    <h5> Principais Skills </h5>

                    {detalhes && detalhes.moves.map((move, index) => {
                        return index < 6 && <p key={move.move.name}><strong>-)</strong> {move.move.name}</p>
                    })}

                </div>
            </div>

        </StyledDetalhes>
    )
}
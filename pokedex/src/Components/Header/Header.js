import { useHistory } from "react-router-dom"

import { IrParaInicio, IrParaDetalhes, IrParaPokedex } from "../Router/RouteGPS"



export const Header = () => {
    const history = useHistory()



    return (
        <div>
            <button onClick={()=> IrParaInicio(history)}> INICIO </button>
            <button onClick={()=> IrParaPokedex(history)}> Pokedex </button>
            <button onClick={()=> IrParaDetalhes(history)}> Detalhes </button>
        </div>
    )
}
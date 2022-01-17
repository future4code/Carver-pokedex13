import axios from "axios";
import { BASE_URL } from "../Constants/urls";


export const getPokemons = (url, set_data) => {
    axios.get(url)
        .then((res) => {
            set_data(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}
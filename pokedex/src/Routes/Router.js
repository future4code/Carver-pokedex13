import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { Header } from "../Components/Header/Header";


export default function Router() {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>
                    <Route exact path={"/pokedex"}>
                        <PokedexPage/>
                    </Route>  
                    <Route exact path={"/poke_detalhes/:id"}>
                        <DetailPage/>
                    </Route> 
                    <Route>
                        <ErrorPage/>
                    </Route> 
                </Switch>
        </BrowserRouter>
    )
}

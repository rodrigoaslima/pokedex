import Api from "../services/api";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface PokemonProviderProps{
    children: ReactNode
}

interface PokemonData{
    name: string;
    url: string;
}

interface IPokemonsContextData{
    pokemonList: PokemonData[];
    getPokemonList: () => Promise<void>;

}

const PokemonContext = createContext({} as IPokemonsContextData);

function PokemonProvider({children}: PokemonProviderProps){
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

    async function getPokemonList(){
        try {
            const response = await Api.get(`pokemon`);
            setPokemonList(response.data.results);
        } catch (error) {
            console.log('error: ', error)
        }
        
    }

    return(
        <PokemonContext.Provider value={{getPokemonList, pokemonList}}>
            {children}
        </PokemonContext.Provider>
    )
}

function usePokemon(){
    const context = useContext(PokemonContext);
    return context
}

export { PokemonProvider, usePokemon};
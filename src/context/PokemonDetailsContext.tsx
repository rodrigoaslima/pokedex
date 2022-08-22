import Api from "../services/api";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface PokemonProviderProps{
    children: ReactNode
}

interface PokemonData{
    name: string;
    img: string;
    type: [];
    stats: [];
    weight: number;
    height: number;
    order: number;
    abilities: []
}

interface IPokemonsDetailsContextData{
    pokemonDetails: PokemonData;
    getPokemonDetails: (name: string | undefined) => Promise<void>;

}

const PokemonDetailsContext = createContext({} as IPokemonsDetailsContextData);

function PokemonDetalisProvider({children}: PokemonProviderProps){
    const [pokemonDetails, setPokemonDetails] = useState<PokemonData>({} as PokemonData);

    async function getPokemonDetails(name: string | undefined){
        try {
            const response = await Api.get(`pokemon/${name}`);
            setPokemonDetails({
                abilities: response.data.abilities,
                height: response.data.height,
                img: response.data.sprites.front_default,
                name: response.data.name,
                order: response.data.order,
                stats: response.data.stats,
                type: response.data.types,
                weight: response.data.weight
            })
            
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return(
        <PokemonDetailsContext.Provider value={{getPokemonDetails, pokemonDetails}}>
            {children}
        </PokemonDetailsContext.Provider>
    )
}

function usePokemonDetail(){
    const context = useContext(PokemonDetailsContext);
    return context
}

export { PokemonDetalisProvider, usePokemonDetail};
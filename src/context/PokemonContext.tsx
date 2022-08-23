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
    totalPages: number;
    getPokemonList: () => Promise<void>;
    getNextPage: () => void;
    getPreviousPage: () => void;

}

const PokemonContext = createContext({} as IPokemonsContextData);

function PokemonProvider({children}: PokemonProviderProps){
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

    const [totalPages, setTotalPages] = useState(0);
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');


    async function getPokemonList(){
        try {
            const response = await Api.get(`pokemon`);
          
            setTotalPages(response.data.count)
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
            setPokemonList(response.data.results);
        } catch (error) {
            console.log('error: ', error)
        }
        
    }

    async function getNextPage(){
        if(nextPage){
            const query = nextPage.substring(nextPage.indexOf('?') + 1)
            try {
                const response = await Api.get(`pokemon?${query}`);
                setTotalPages(response.data.count)
                setNextPage(response.data.next);
                setPreviousPage(response.data.previous);
                setPokemonList(response.data.results);
            } catch (error) {
                console.log('error: ', error)
            }
            
        }    
    }

    async function getPreviousPage(){
        const query = previousPage.substring(previousPage.indexOf('?') + 1)
            try {
                const response = await Api.get(`pokemon?${query}`);
                setTotalPages(response.data.count)
                setNextPage(response.data.next);
                setPreviousPage(response.data.previous);
                setPokemonList(response.data.results);
            } catch (error) {
                console.log('error: ', error)
            }
    }

    return(
        <PokemonContext.Provider value={{getPokemonList, getNextPage,getPreviousPage, pokemonList, totalPages}}>
            {children}
        </PokemonContext.Provider>
    )
}



function usePokemon(){
    const context = useContext(PokemonContext);
    return context
}

export { PokemonProvider, usePokemon};
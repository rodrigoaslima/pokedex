import { createContext, ReactNode, useContext, useState } from "react";

interface FavoritesProviderProps{
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

interface IFavoritesContextData{
    pokemonDetails: PokemonData;
    favoriteList: PokemonData[];
    // eslint-disable-next-line no-empty-pattern
    getFavoritePokemon: ({}: PokemonData) => void;

}

const FavoritesContext = createContext({} as IFavoritesContextData);

function FavoritesProvider({children}: FavoritesProviderProps){
    const [pokemonDetails, setPokemonDetails] = useState<PokemonData>({} as PokemonData);
    const [favoriteList, setFavoriteList] = useState<PokemonData[]>([]); 

    function getFavoritePokemon(pokemon: PokemonData){
        
       const updateFavorites = [...favoriteList];
       const favoriteIndex = favoriteList.findIndex(item => item.name === pokemon.name)
       if(favoriteIndex >=0){
        updateFavorites.splice(favoriteIndex, 1);
       }else{
        updateFavorites.push(pokemon)
       }
       setFavoriteList(updateFavorites) 
    }

   
    return(
        <FavoritesContext.Provider value={{getFavoritePokemon, pokemonDetails, favoriteList}}>
            {children}
        </FavoritesContext.Provider>
    )
}

function useFavorite(){
    const context = useContext(FavoritesContext);
    return context
}

export { FavoritesProvider, useFavorite};
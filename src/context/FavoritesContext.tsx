import { createContext, ReactNode, useContext, useState } from "react";

interface FavoritesProviderProps{
    children: ReactNode
}

interface IFavoritesContextData{
    favoriteList: string[];
    // eslint-disable-next-line no-empty-pattern
    getFavoritePokemon: (name:string) => void;

}

const FavoritesContext = createContext({} as IFavoritesContextData);

function FavoritesProvider({children}: FavoritesProviderProps){
    const [favoriteList, setFavoriteList] = useState<string[]>([]); 

    function getFavoritePokemon(name: string){
        
       const updateFavorites = [...favoriteList];
       const favoriteIndex = favoriteList.indexOf(name);
       if(favoriteIndex >=0){
        updateFavorites.splice(favoriteIndex, 1);
       }else{
        updateFavorites.push(name);
       }
       setFavoriteList(updateFavorites) 
    }

   
    return(
        <FavoritesContext.Provider value={{getFavoritePokemon, favoriteList}}>
            {children}
        </FavoritesContext.Provider>
    )
}

function useFavorite(){
    const context = useContext(FavoritesContext);
    return context
}

export { FavoritesProvider, useFavorite};
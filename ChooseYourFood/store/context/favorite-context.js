import { createContext, useState } from "react"; 

export const FavoritesContext =  createContext({
    ids: [],
    addFavorite:(id) => {},
    removeFavorite:(id) => {},
})

function FavoritesContextProvider({children}){
    // logic
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id){
        setFavoriteMealIds((currentId) => [...currentId, id])
    }

    function removeFavorite(id){
        setFavoriteMealIds((currentId) => currentId.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider
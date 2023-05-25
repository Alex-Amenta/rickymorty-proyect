import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            const filteredFavs = state.allCharacters.filter(
                fav => fav.id !== Number(payload)
            ) 
            return{
                ...state,
                myFavorites: filteredFavs,
                allCharacters: filteredFavs
            }
        case FILTER:
            //EXTRA Caso "All"
            if(payload === "All") return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [...state.allCharacters];
            const filterCharacters = allCharactersCopy.filter(
                character => character.gender === payload
            )
            return {
                ...state,
                myFavorites: filterCharacters
            }
        case ORDER:
            let orderedCharacters = [...state.allCharacters];
            if(payload === "A"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => a.id - b.id
                    )
            } else if(payload === "D"){
                orderedCharacters = state.allCharacters.sort(
                    (a, b) => b.id - a.id
                    )
            }
            return{
                ...state,
                myFavorites: orderedCharacters
            }
    
        default:
            return {...state}
    }
}
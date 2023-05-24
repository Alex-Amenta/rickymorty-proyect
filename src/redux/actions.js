import { ADD_FAV, REMOVE_FAV } from "./types";

export function addFav(charcater){
    return {
        type: ADD_FAV,
        payload: charcater
    }
}

export function removeFav(id){
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
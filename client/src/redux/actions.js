import { FILTER, ORDER } from "./types";
import axios from 'axios';

export function addFav(character) {
    return async (dispatch) => {
        try {
            const ENDPOINT = 'http://localhost:3001/rickandmorty/fav';
            const { data } = await axios.post(ENDPOINT, character);
            return dispatch({
                type: 'ADD_FAV',
                payload: data
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error.message
            })
        }
    }
}

//                      ADDFAV
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: 'ADD_FAV',
//                 payload: data,
//             });
//         });
//     };
// };

export function removeFav(id) {
    return async (dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data
            });
        } catch (error) {
            return dispatch({
                type: "ERROR",
                payload: error.message
            })
        }
    }
}


//                      REMOVEFAV
// export const removeFav = (id) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: 'REMOVE_FAV',
//                 payload: data,
//             });
//         });
//     };
// };

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(orden) {
    return {
        type: ORDER,
        payload: orden
    }
}
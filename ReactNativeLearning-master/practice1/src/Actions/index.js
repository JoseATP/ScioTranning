import {GET_DATA} from '../Contants'

import Data from '../superheroes.json';

export function getData() {

    return (dispatch) => {
        dispatch({ type: GET_DATA,data:Data});
    }
    
}



import {GET_DATA} from '../Contants'

const initialState = {
    heroes: [],
    info: true,
    user: {}
};

export default dataReducer = (state = initialState,action) =>{
    switch (action.type){
        case GET_DATA :
        console.log(action.data);
            return{...state,
                ...{heroes:action.data}
            }
        default: 
        console.log(action);
        return state
    }
}

//export default () => data
/*Nos permite tener mas reducer en la aplicacion*/

import {combineReducers} from 'redux' ;
import {reducer as formReducer} from 'redux-form';
import SuperheroesReducer from './superHeroesReducer';
//import ActionReducer from './dataActions';

const reducers = {
  form: formReducer,
  superheroes: SuperheroesReducer
}
const allReducers= combineReducers(reducers);
export default allReducers;
import { combineReducers } from "redux";
import SportReducer from './sportReducer';
import RecipesReducer from './recipesReducers';

export default combineReducers({
    SportReducer,
    RecipesReducer,
})
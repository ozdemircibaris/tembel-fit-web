import { combineReducers } from "redux";
import AuthReducer from './authReducer';
import SportReducer from './sportReducer';
import DietsReducer from './dietsReducer';
import RecipesReducer from './recipesReducers';

export default combineReducers({
    AuthReducer,
    SportReducer,
    DietsReducer,
    RecipesReducer,
})
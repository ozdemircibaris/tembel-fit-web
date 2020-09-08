import {
    FETCH_RECIPES_CATEGORIES
} from "../actions/recipesActions";

const INITIAL_STATE = {
    recipesCategoriesValue: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RECIPES_CATEGORIES:
            return {
                recipesCategoriesValue: action.payload
            }
        default:
            return state;
    }
}
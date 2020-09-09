import {
    FETCH_RECIPES_CATEGORIES,
    RECIPES_TITLE_CHANGE,
    RECIPES_IMAGE_URL_CHANGE,
    SEND_RECIPES_CLICK,
    SEND_RECIPES_SUCCESS,
} from "../actions/recipesActions";

const INITIAL_STATE = {
    recipesCategoriesValue: [],
    recipesTitleValue: "",
    recipesImageUrlValue: "",
    recipesSpinnerStatus: false,
    recipesWarningStatus: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RECIPES_CATEGORIES:
            return {
                recipesCategoriesValue: action.payload
            }
        case RECIPES_TITLE_CHANGE:
            return {
                ...state,
                recipesTitleValue: action.payload
            }
        case RECIPES_IMAGE_URL_CHANGE:
            return {
                ...state,
                recipesImageUrlValue: action.payload
            }
        case SEND_RECIPES_CLICK:
            return {
                ...state,
                recipesSpinnerStatus: true,
            }
        case SEND_RECIPES_SUCCESS:
            return {
                ...state,
                recipesSpinnerStatus: false,
                recipesCategoriesValue: state.recipesCategoriesValue.concat(action.payload),
                recipesWarningStatus: "success",
                recipesTitleValue: "",
                recipesImageUrlValue: ""
            }
        default:
            return state;
    }
}
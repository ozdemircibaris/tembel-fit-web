import {
    ADD_DIET_CATEGORIES_CLICK,
    ADD_DIET_CATEGORIES_FAILED,
    ADD_DIET_CATEGORIES_SUCCESS,
    ADD_DIET_LIST_CLICK,
    ADD_DIET_LIST_FAILED,
    ADD_DIET_LIST_SUCCESS,
    ADD_DIET_RANGE_VALUE_CLICK,
    ADD_DIET_RANGE_VALUE_FAILED,
    ADD_DIET_RANGE_VALUE_SUCCESS,
    ADD_DIET_SUB_CAT_CLICK,
    ADD_DIET_SUB_CAT_FAILED,
    ADD_DIET_SUB_CAT_SUCCESS,
    DIET_CAT_TITLE_CHANGE,
    FETCH_DIET_CATEGORIES,
    FETCH_DIET_LIST,
    FETCH_DIET_SUB_CATEGORIES
} from "../actions/dietAction";

const INITIAL_STATE = {
    dietCategoriesValues: [],
    dietCatTitleValue: "",
    dietSpinnerStatus: false,
    dietWarningStatus: "",
    dietSubCategoriesValues: [],
    dietListValues: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DIET_CATEGORIES:
            return {
                ...state,
                dietCategoriesValues: action.payload
            }
        case DIET_CAT_TITLE_CHANGE:
            return {
                ...state,
                dietCatTitleValue: action.payload
            }
        case ADD_DIET_CATEGORIES_CLICK:
            return {
                ...state,
                dietSpinnerStatus: true
            }
        case ADD_DIET_CATEGORIES_SUCCESS:
            return {
                ...state,
                dietCategoriesValues: state.dietCategoriesValues.concat(action.payload),
                dietSpinnerStatus: false,
                dietWarningStatus: "success",
                dietCatTitleValue: "",
            }
        case ADD_DIET_CATEGORIES_FAILED:
            return {
                ...state,
                dietSpinnerStatus: false,
                dietWarningStatus: "error",
            }
        case FETCH_DIET_SUB_CATEGORIES:
            return {
                ...state,
                dietSubCategoriesValues: action.payload
            }
        case ADD_DIET_SUB_CAT_CLICK:
            return {
                ...state,
                dietSpinnerStatus: true
            }
        case ADD_DIET_SUB_CAT_SUCCESS:
            return {
                ...state,
                dietSubCategoriesValues: state.dietSubCategoriesValues.concat(action.payload),
                dietSpinnerStatus: false,
                dietWarningStatus: "success",
                dietCatTitleValue: "",
            }
        case ADD_DIET_SUB_CAT_FAILED:
            return {
                ...state,
                dietSpinnerStatus: false,
                dietWarningStatus: "error",
            }
        case ADD_DIET_RANGE_VALUE_CLICK:
            return {
                ...state,
                dietSpinnerStatus: true
            }
        case ADD_DIET_RANGE_VALUE_SUCCESS:
            return {
                ...state,
                dietSpinnerStatus: false,
                dietWarningStatus: "success",
                dietCatTitleValue: "",
            }
        case ADD_DIET_RANGE_VALUE_FAILED:
            return {
                ...state,
                dietSpinnerStatus: false,
                dietWarningStatus: "error",
            }
        case FETCH_DIET_LIST:
            return {
                ...state,
                dietListValues: action.payload
            }
        case ADD_DIET_LIST_CLICK:
            return {
                ...state,
                dietSpinnerStatus: true
            }
        case ADD_DIET_LIST_SUCCESS:
            return {
                ...state,
                dietListValues: state.dietListValues.concat(action.payload),
                dietSpinnerStatus: false,
                dietWarningStatus: "success",
                dietCatTitleValue: "",
            }
        case ADD_DIET_LIST_FAILED:
            return {
                ...state,
                dietSpinnerStatus: false,
                dietWarningStatus: "error",
            }
        default:
            return state;
    }
}
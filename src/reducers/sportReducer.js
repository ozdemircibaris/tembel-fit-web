import {
    SPORT_CAT_TITLE_CHANGE,
    SPORT_CAT_IMAGE_URL_CHANGE,
    ADD_SPORT_CATEGORIES_CLICK,
    ADD_SPORT_CATEGORIES_SUCCESS,
    ADD_SPORT_CATEGORIES_FAILED,
    FETCH_SPORT_CATEGORIES,
    FETCH_SUB_SPORT_CATEGORIES,
    ADD_SPORT_SUB_CATEGORIES_CLICK,
    ADD_SPORT_SUB_CATEGORIES_SUCCESS,
    ADD_SPORT_SUB_CATEGORIES_FAILED,
    FETCH_SPORT_SUB_CAT_TAB_TITLE,
    ADD_SPORT_SUB_CAT_TAB_TITLE_CLICK,
    ADD_SPORT_SUB_CAT_TAB_TITLE_SUCCESS,
    ADD_SPORT_SUB_CAT_TAB_TITLE_FAILED,
    FETCH_SPORT_SUB_CAT_TAB_CONTENT,
    ADD_SPORT_SUB_CAT_TAB_CONTENT_CLICK,
    ADD_SPORT_SUB_CAT_TAB_CONTENT_SUCCESS,
    ADD_SPORT_SUB_CAT_TAB_CONTENT_FAILED
} from "../actions/sportsAction";

const INITIAL_STATE = {
    sportCatTitleValue: "",
    sportCatImageUrlValue: "",
    sportCatValues: [],
    sportSpinnerStatus: false,
    sportWarningStatus: "",
    subSportCatValues: [],
    sportSubCatTabTitleValues: [],
    sportSubCatTabContentValue: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SPORT_CAT_TITLE_CHANGE:
            return {
                ...state,
                sportCatTitleValue: action.payload
            }
        case SPORT_CAT_IMAGE_URL_CHANGE:
            return {
                ...state,
                sportCatImageUrlValue: action.payload
            }
        case ADD_SPORT_CATEGORIES_CLICK:
            return {
                ...state,
                sportSpinnerStatus: true
            }
        case ADD_SPORT_CATEGORIES_SUCCESS:
            return {
                ...state,
                sportCatValues: state.sportCatValues.concat(action.payload),
                sportSpinnerStatus: false,
                sportWarningStatus: "success",
                sportCatTitleValue: "",
                sportCatImageUrlValue: "",
            }
        case ADD_SPORT_CATEGORIES_FAILED:
            return {
                ...state,
                sportSpinnerStatus: false,
                sportWarningStatus: "error"
            }
        case FETCH_SPORT_CATEGORIES:
            return {
                ...state,
                sportCatValues: action.payload
            }
        case FETCH_SUB_SPORT_CATEGORIES:
            return {
                ...state,
                subSportCatValues: action.payload
            }
        case ADD_SPORT_SUB_CATEGORIES_CLICK:
            return {
                ...state,
                sportSpinnerStatus: true
            }
        case ADD_SPORT_SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                subSportCatValues: state.subSportCatValues.concat(action.payload),
                sportSpinnerStatus: false,
                sportWarningStatus: "success",
                sportCatTitleValue: "",
                sportCatImageUrlValue: "",
            }
        case ADD_SPORT_SUB_CATEGORIES_FAILED:
            return {
                ...state,
                sportSpinnerStatus: false,
                sportWarningStatus: "error"
            }
        case FETCH_SPORT_SUB_CAT_TAB_TITLE:
            return {
                ...state,
                sportSubCatTabTitleValues: action.payload
            }
        case ADD_SPORT_SUB_CAT_TAB_TITLE_CLICK:
            return {
                ...state,
                sportSpinnerStatus: true
            }
        case ADD_SPORT_SUB_CAT_TAB_TITLE_SUCCESS:
            return {
                ...state,
                sportSubCatTabTitleValues: state.sportSubCatTabTitleValues.concat(action.payload),
                sportSpinnerStatus: false,
                sportWarningStatus: "success",
                sportCatTitleValue: "",
                sportCatImageUrlValue: "",
            }
        case ADD_SPORT_SUB_CAT_TAB_TITLE_FAILED:
            return {
                ...state,
                sportSpinnerStatus: false,
                sportWarningStatus: "error"
            }
        case FETCH_SPORT_SUB_CAT_TAB_CONTENT:
            return {
                ...state,
                sportSubCatTabContentValue: action.payload
            }
        case ADD_SPORT_SUB_CAT_TAB_CONTENT_CLICK:
            return {
                ...state,
                sportSpinnerStatus: true
            }
        case ADD_SPORT_SUB_CAT_TAB_CONTENT_SUCCESS:
            return {
                ...state,
                sportSubCatTabContentValue: state.sportSubCatTabContentValue.concat(action.payload),
                sportSpinnerStatus: false,
                sportWarningStatus: "success",
                sportCatTitleValue: "",
                sportCatImageUrlValue: "",
            }
        case ADD_SPORT_SUB_CAT_TAB_CONTENT_FAILED:
            return {
                ...state,
                sportSpinnerStatus: false,
                sportWarningStatus: "error"
            }
        default:
            return state;
    }
}
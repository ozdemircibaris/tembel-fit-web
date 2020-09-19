import axios from "axios";
import { API_BASE } from "../components/config/env";

export const FETCH_DIET_CATEGORIES = "FETCH_DIET_CATEGORIES";

export const DIET_CAT_TITLE_CHANGE = "diet_cat_title_change"

export const ADD_DIET_CATEGORIES_CLICK   = "add_diet_categories_click";
export const ADD_DIET_CATEGORIES_SUCCESS = "add_diet_categories_success";
export const ADD_DIET_CATEGORIES_FAILED  = "add_diet_categories_failed";

export const FETCH_DIET_SUB_CATEGORIES = "fetch_diet_sub_categories";

export const ADD_DIET_SUB_CAT_CLICK   = "add_diet_sub_cat_click";
export const ADD_DIET_SUB_CAT_SUCCESS = "add_diet_sub_cat_success";
export const ADD_DIET_SUB_CAT_FAILED  = "add_diet_sub_cat_failed";

export const ADD_DIET_RANGE_VALUE_CLICK   = "add_diet_range_value_click";
export const ADD_DIET_RANGE_VALUE_SUCCESS = "add_diet_range_value_success";
export const ADD_DIET_RANGE_VALUE_FAILED  = "add_diet_range_value_failed";

export const FETCH_DIET_LIST = "fetch_diet_list";

export const ADD_DIET_LIST_CLICK   = "add_diet_list_click";
export const ADD_DIET_LIST_SUCCESS = "add_diet_list_success";
export const ADD_DIET_LIST_FAILED  = "add_diet_list_failed";

export const fetchDietCategories = () => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/diet-categories`
        }).then((result) => {
            dispatch({
                type: FETCH_DIET_CATEGORIES,
                payload: result.data
            })
        })
    }
}

export const dietCatTitleChange = (value) => {
    return {
        type: DIET_CAT_TITLE_CHANGE,
        payload: value
    }
}

export const addDietCategories = (title) => {
    return dispatch => {
        dispatch({
            type: ADD_DIET_CATEGORIES_CLICK
        })
        let data = JSON.stringify({ "title": title })
        axios({
            method: "post",
            url: `${API_BASE}/diet-categories`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            dispatch({
                type: ADD_DIET_CATEGORIES_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            dispatch({
                type: ADD_DIET_CATEGORIES_FAILED,
            })
        })
    }
}

export const fetchDietSubCategories = (id, BMI) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/diet-categories/sub-cat/${id}`,
            params: { BMI: BMI }
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: FETCH_DIET_SUB_CATEGORIES,
                payload: result.data
            })
        })
    }
}

export const addDietSubCat = (title, cat_id) => {
    return dispatch => {
        dispatch({
            type: ADD_DIET_SUB_CAT_CLICK
        })
        let data = JSON.stringify({ "title": title, "cat_id": cat_id })
        axios({
            method: "post",
            url: `${API_BASE}/diet-categories/sub-cat`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            dispatch({
                type: ADD_DIET_SUB_CAT_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err.response)
            dispatch({
                type: ADD_DIET_SUB_CAT_FAILED
            })
        })
    }
}

export const addDietRangeValue = (gender, age_min, age_max, size_min, size_max, kg_min, kg_max, target_id, sub_cat_id) => {
    return dispatch => {
        dispatch({
            type: ADD_DIET_RANGE_VALUE_CLICK
        })
        let data = JSON.stringify({
            "gender": gender,
            "age_min": age_min,
            "age_max": age_max,
            "size_min": size_min,
            "size_max": size_max,
            "kg_min": kg_min,
            "kg_max": kg_max,
            "target_id": target_id,
            "sub_cat_id": sub_cat_id,
        })
        axios({
            method: "post",
            url: `${API_BASE}/diet-categories/sub-cat/value-range`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            dispatch({
                type: ADD_DIET_RANGE_VALUE_SUCCESS,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err.response)
            dispatch({
                type: ADD_DIET_RANGE_VALUE_FAILED
            })
        })
    }
}

export const fetchDietList = (id) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/diet-categories/sub-cat/diet-list/${id}`
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: FETCH_DIET_LIST,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}

export const addDietList = (title, sub_cat_id) => {
    return dispatch => {
        dispatch({
            type: ADD_DIET_LIST_CLICK
        })
        let data = JSON.stringify({ "title": title, "sub_cat_id": sub_cat_id })
        axios({
            method: "post",
            url: `${API_BASE}/diet-categories/sub-cat/diet-list`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: ADD_DIET_LIST_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err.response)
            dispatch({
                type: ADD_DIET_LIST_FAILED
            })
        })
    }
}
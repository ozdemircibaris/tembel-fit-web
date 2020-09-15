import axios from "axios";
import { API_BASE } from "../components/config/env";

export const SPORT_CAT_TITLE_CHANGE = "sport_cat_title_change";
export const SPORT_CAT_IMAGE_URL_CHANGE = "sport_cat_image_url_change";

export const ADD_SPORT_CATEGORIES_CLICK   = "add_sport_categories_click";
export const ADD_SPORT_CATEGORIES_SUCCESS = "add_sport_categories_success";
export const ADD_SPORT_CATEGORIES_FAILED  = "add_sport_categories_failed";

export const FETCH_SPORT_CATEGORIES     = "fetch_sport_categories";

export const FETCH_SUB_SPORT_CATEGORIES = "fetch_sub_sport_categories";

export const ADD_SPORT_SUB_CATEGORIES_CLICK   = "add_sport_sub_categories_click";
export const ADD_SPORT_SUB_CATEGORIES_SUCCESS = "add_sport_sub_categories_success";
export const ADD_SPORT_SUB_CATEGORIES_FAILED  = "add_sport_sub_categories_failed";

export const FETCH_SPORT_SUB_CAT_TAB_TITLE = "fetch_sport_sub_cat_tab_title";

export const ADD_SPORT_SUB_CAT_TAB_TITLE_CLICK = "add_sport_sub_cat_tab_title_click";
export const ADD_SPORT_SUB_CAT_TAB_TITLE_SUCCESS = "add_sport_sub_cat_tab_title_success";
export const ADD_SPORT_SUB_CAT_TAB_TITLE_FAILED = "add_sport_sub_cat_tab_title_failed";

export const FETCH_SPORT_SUB_CAT_TAB_CONTENT = "fetch_sport_sub_cat_tab_content";

export const ADD_SPORT_SUB_CAT_TAB_CONTENT_CLICK = "add_sport_sub_cat_tab_content_click";
export const ADD_SPORT_SUB_CAT_TAB_CONTENT_SUCCESS = "add_sport_sub_cat_tab_content_success";
export const ADD_SPORT_SUB_CAT_TAB_CONTENT_FAILED = "add_sport_sub_cat_tab_content_failed";

export const sportCatTitleChange = (value) => {
    return {
        type: SPORT_CAT_TITLE_CHANGE,
        payload: value
    }
}

export const sportCatImageUrlChange = (value) => {
    return {
        type: SPORT_CAT_IMAGE_URL_CHANGE,
        payload: value
    }
}

export const addSportCategories = (title, image_url) => {
    return dispatch => {
        dispatch({
            type: ADD_SPORT_CATEGORIES_CLICK,
        })
        let data = JSON.stringify({"title": title, "image_url": image_url})
        axios({
            method: "post",
            url: `${API_BASE}/sport-categories`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            if(result.data.status == "success") {
                dispatch({
                    type: ADD_SPORT_CATEGORIES_SUCCESS,
                    payload: result.data.data
                })
            }
        }).catch((err) => {
            dispatch({
                type: ADD_SPORT_CATEGORIES_FAILED,
            })
        })
    }
}

export const fetchSportCategories = () => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/sport-categories`,
        }).then((result) => {
            dispatch({
                type: FETCH_SPORT_CATEGORIES,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err)
        })
    }
}

export const fetchSubSportCategories = (id) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/sport-categories/sub-cat/${id}`,
        }).then((result) => {
            dispatch({
                type: FETCH_SUB_SPORT_CATEGORIES,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err)
        })
    }
}

export const addSportSubCategories = (title, image_url, cat_id) => {
    return dispatch => {
        dispatch({
            type: ADD_SPORT_SUB_CATEGORIES_CLICK,
        })
        let data = JSON.stringify({ "title": title, "image_url": image_url, "cat_id": cat_id })
        axios({
            method: "post",
            url: `${API_BASE}/sport-categories/sub-cat`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            dispatch({
                type: ADD_SPORT_SUB_CATEGORIES_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            dispatch({
                type: ADD_SPORT_SUB_CATEGORIES_FAILED,
            })
        })
    }
}

export const fetchSportSubCatTabTitle = (subCatId) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/sport-categories/sub-cat/tab-title/${subCatId}`,
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: FETCH_SPORT_SUB_CAT_TAB_TITLE,
                payload: result.data
            })
        })
    }
}

export const addSportSubCatTabTitle = (title, sub_cat_id) => {
    return dispatch => {
        dispatch({
            type: ADD_SPORT_SUB_CAT_TAB_TITLE_CLICK
        })
        let data = JSON.stringify({ "title": title, "sub_cat_id": sub_cat_id})
        axios({
            method: "post",
            url: `${API_BASE}/sport-categories/sub-cat/tab-title`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: ADD_SPORT_SUB_CAT_TAB_TITLE_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err.response)
            dispatch({
                type: ADD_SPORT_SUB_CAT_TAB_TITLE_FAILED
            })
        })
    }
}

export const fetchSportSubCatTabContent = (tabTitleId) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/sport-categories/sub-cat/tab-content/${tabTitleId}`,
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: FETCH_SPORT_SUB_CAT_TAB_CONTENT,
                payload: result.data
            })
        })
    }
}

export const addSportSubCatTabContent = (video_url, tab_title_id) => {
    return dispatch => {
        dispatch({
            type: ADD_SPORT_SUB_CAT_TAB_CONTENT_CLICK,
        })
        let data = JSON.stringify({ "video_url": video_url, "tab_title_id": tab_title_id})
        axios({
            method: "post",
            url: `${API_BASE}/sport-categories/sub-cat/tab-content`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data)
            dispatch({
                type: ADD_SPORT_SUB_CAT_TAB_CONTENT_SUCCESS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err.response)
            dispatch({
                type: ADD_SPORT_SUB_CAT_TAB_CONTENT_FAILED
            })
        })
    }
}

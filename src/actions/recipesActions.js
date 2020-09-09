import axios from 'axios';
import { API_BASE } from '../components/config/env';

export const FETCH_RECIPES_CATEGORIES = "fetch_recipes_categories";

export const RECIPES_TITLE_CHANGE     = "recipes_title_change";
export const RECIPES_IMAGE_URL_CHANGE = "recipes_image_url_change";

export const SEND_RECIPES_CLICK       = "send_recipes_click";
export const SEND_RECIPES_SUCCESS     = "send_recipes_success";
export const SEND_RECIPES_FAILED      = "send_recipes_failed";

export const fetchRecipesCategories = () => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/recipe/categories`,
        }).then((result) => {
            dispatch({
                type: FETCH_RECIPES_CATEGORIES,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log("err", err)
        })
    }
}

export const recipesTitleChange = (value) => {
    return {
        type: RECIPES_TITLE_CHANGE,
        payload: value
    }
}

export const recipesImageUrlChange = (value) => {
    return {
        type: RECIPES_IMAGE_URL_CHANGE,
        payload: value
    }
}

export const sendRecipes = (title, image) => {
    return dispatch => {
        dispatch({
            type: SEND_RECIPES_CLICK
        })
        let data = JSON.stringify({ "title": title, "image": image})
        axios({
            method: "POST",
            url: `${API_BASE}/recipe/categories`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            if(result.data.status == "success") {
                dispatch({
                    type: SEND_RECIPES_SUCCESS,
                    payload: result.data.data
                })
            }
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}
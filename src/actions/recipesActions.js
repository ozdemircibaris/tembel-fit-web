import axios from 'axios';
import { API_BASE } from '../components/config/env';

export const FETCH_RECIPES_CATEGORIES = "fetch_recipes_categories";

export const SEND_RECIPES_CLICK   = "send_recipes_click";
export const SEND_RECIPES_SUCCESS = "send_recipes_success";
export const SEND_RECIPES_FAILED  = "send_recipes_failed";

export const fetchRecipesCategories = () => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/recipe/categories`,
        }).then((result) => {
            console.log("result", result.data)
        }).catch((err) => {
            console.log("err", err)
        })
    }
}

export const sendRecipes = (title, image) => {
    return dispatch => {
        dispatch({
            type: SEND_RECIPES_CLICK
        })
        console.log(title, image)
        let data = JSON.stringify({ "title": title, "image": image})
        console.log("data", data)
        axios({
            method: "POST",
            url: `${API_BASE}/recipe/categories`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result)
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}
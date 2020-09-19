import axios from "axios";
import { API_BASE } from "../components/config/env";

export const FETCH_TARGETS = "fetch_targets";

export const fetchTargets = () => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/users/targets`,
        }).then((result) => {
            dispatch({
                type: FETCH_TARGETS,
                payload: result.data
            })
        }).catch((err) => {
            console.log("err", err.response)
        })
    }
}
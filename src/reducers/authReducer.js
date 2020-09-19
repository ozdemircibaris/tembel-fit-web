import {
    FETCH_TARGETS
} from "../actions/authAction";

const INITIAL_STATE = {
    targetValues: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TARGETS:
            return {
                ...state,
                targetValues: action.payload
            }
        default:
            return state;
    }
}
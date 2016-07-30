export const FETCH_OBJECTIONS_ERROR = "FETCH_OBJECTIONS_ERROR";

export default function errorReducer(state = { objectionFetch: "Default error" }, action) {
    switch (action.type) {
        case FETCH_OBJECTIONS_ERROR: return { objectionFetch: action.error }
        default:
            return state;
    }
}
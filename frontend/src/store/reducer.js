import React from "react";
import { FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE, ARCHIVE_CALL_SUCCESS, ARCHIVE_CALL_FAILURE } from "./actions"

const initialState = {
    allCalls: [],
    archivedCalls: [],
    error: "",
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case(FETCH_CALLS_SUCCESS):
            return {
                ...state,
                allCalls: action.payload,
            };
        case(FETCH_CALLS_FAILURE):
            return {
                ...state,
                error: action.payload,
            };
        case(ARCHIVE_CALL_SUCCESS):
            return {
                ...state,
                archivedCalls: [...state.archivedCalls, action.payload],
            };
        case(ARCHIVE_CALL_FAILURE):
        return {
            ...state,
            error: action.payload,
        };
        default:
            return state;
    }
}

export default reducer;

/* Call Object - May need later
    // id: null,
    // created_at: new Date(),
    // direction: "",
    // from: null,
    // to: null,
    // via: null,
    // duration: null,
    // is_archived: false,
    // call_type: ""
*/
import { FETCH_CALLS_SUCCESS, FETCH_CALLS_FAILURE, ARCHIVE_CALL_SUCCESS, ARCHIVE_CALL_FAILURE, FETCH_ARCHIVED_SUCCESS, 
    FETCH_ARCHIVED_FAILURE, UN_ARCHIVE_CALL_SUCCESS, UN_ARCHIVE_CALL_FAILURE } from "./actions"

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
                // eslint-disable-next-line array-callback-return
                allCalls: state.allCalls.filter((uniqueCall)=>{
                    if(uniqueCall.id !== action.payload.id){
                        return uniqueCall;
                    }
                }),
                archivedCalls: [...state.archivedCalls, action.payload],
            };
        case(ARCHIVE_CALL_FAILURE):
        return {
            ...state,
            error: action.payload,
        };
        case(FETCH_ARCHIVED_SUCCESS):
            return {
                ...state,
                archivedCalls: action.payload,
            };
        case(FETCH_ARCHIVED_FAILURE):
            return {
                ...state,
                error: action.payload,
            };
        case(UN_ARCHIVE_CALL_SUCCESS):
            return {
                ...state,
                allCalls: [...state.allCalls, action.payload],
                // eslint-disable-next-line array-callback-return
                archivedCalls: state.archivedCalls.filter((uniqueArchCall)=>{
                    // eslint-disable-next-line eqeqeq
                    if (uniqueArchCall.id != action.payload.id){
                        return uniqueArchCall;
                    }
                }),
            };
        case(UN_ARCHIVE_CALL_FAILURE):
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;


import axios from "axios";

export const FETCH_CALLS_SUCCESS = "FETCH_CALLS_SUCCESS"; 
export const FETCH_CALLS_FAILURE = "FETCH_CALLS_FAILURE";
export const ARCHIVE_CALL_SUCCESS = "ARCHIVE_CALL_SUCCESS";
export const ARCHIVE_CALL_FAILURE = "ARCHIVE_CALL_FAILURE";
export const FETCH_ARCHIVED_SUCCESS = "FETCH_ARCHIVED_SUCCESS";
export const FETCH_ARCHIVED_FAILURE = "FETCH_ARCHIVED_FAILURE";

//Redux Thunk For Fetching Calls, 2 Actions Built In
export const fetchCalls = () => (dispatch) => {

    axios.get('https://aircall-job.herokuapp.com/activities')
        .then((res)=>{
            console.log("SUCCEEDED FETCHING CALLS", res);
            dispatch({ type: FETCH_CALLS_SUCCESS, payload: res.data })
        })
        .catch((err)=>{
            console.log("FAILED FETCHING CALLS", err);
            dispatch({ type: FETCH_CALLS_FAILURE, payload: err.message })
        })  
}

//Redux Thunk For Archiving Call, 2 Actions Built In
//POST should be changed to PUT, but API only supports POST for now according to ReadMe, consult backend when time available
export const archiveCall = (callToArchive) => (dispatch)=>{

    const reformattedCallToArchive = {
        ...callToArchive,
        is_archived: true,
    }

    axios.post(`https://aircall-job.herokuapp.com/activities/${reformattedCallToArchive.id}`, reformattedCallToArchive)
    .then((res)=>{
        console.log("SUCCEEDED ARCHIVING CALL", res);
        dispatch({ type: ARCHIVE_CALL_SUCCESS, payload: res.data })
    })
    .catch((err)=>{
        console.log("FAILED ARCHIVING CALL", err.message);
        dispatch({ type: ARCHIVE_CALL_FAILURE, payload: err.message })
    })
}

//Redux thunk for fetching archived calls, 2 actions contained
export const fetchArchivedCalls = () => (dispatch) => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res)=>{
        console.log("SUCCEEDED FETCHING CALLS TO STAGE FOR FINDING ARCHIVED ONES", res.data);
        let archCalls = [...res.data];
        let archCallsFinal = archCalls.filter((individCall)=>{
            if (individCall.is_archived == true){
                return individCall;
            } 
        })
            dispatch({ type: FETCH_ARCHIVED_SUCCESS, payload: archCallsFinal });    
    })
    .catch((err)=>{
        console.log("FAILED FETCHING ARCHIVED CALLS", err.message);
        dispatch({ type: FETCH_ARCHIVED_FAILURE, payload: err.message });
    })
}
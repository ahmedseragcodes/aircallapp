import axios from "axios";

export const FETCH_CALLS_SUCCESS = "FETCH_CALLS_SUCCESS"; 
export const FETCH_CALLS_FAILURE = "FETCH_CALLS_FAILURE";
export const ARCHIVE_CALL_SUCCESS = "ARCHIVE_CALL_SUCCESS";
export const ARCHIVE_CALL_FAILURE = "ARCHIVE_CALL_FAILURE";
export const FETCH_ARCHIVED_SUCCESS = "FETCH_ARCHIVED_SUCCESS";
export const FETCH_ARCHIVED_FAILURE = "FETCH_ARCHIVED_FAILURE";
export const UN_ARCHIVE_CALL_SUCCESS="UN_ARCHIVE_CALL_SUCCESS";
export const UN_ARCHIVE_CALL_FAILURE="UN_ARCHIVE_CALL_FAILURE";

//ACTIONS
//FYI NORMALLY I'D REMOVE THESE CONSOLE LOGS, BUT I THINK IT MAY BE USEFUL FOR YOU WHEN TRAVERSING CODEBASE

//[GET] All Calls, 2 Actions Contained
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

//[POST] Archived Call, 2 Actions Contained
//POST should be changed to PUT, but API only supports POST for now according to ReadMe, consult backend when time available
export const archiveCall = (callToArchive) => (dispatch)=>{

    const reformattedCallToArchive = {
        ...callToArchive,
        is_archived: true,
    }

    axios.post(`https://aircall-job.herokuapp.com/activities/${reformattedCallToArchive.id}`, reformattedCallToArchive)
    .then((res)=>{
        console.log("SUCCEEDED ARCHIVING CALL", res.data);
        dispatch({ type: ARCHIVE_CALL_SUCCESS, payload: res.data })
    })
    .catch((err)=>{
        console.log("FAILED ARCHIVING CALL", err.message);
        dispatch({ type: ARCHIVE_CALL_FAILURE, payload: err.message })
    })
}

// [GET] Archived Calls, 2 Actions Contained
export const fetchArchivedCalls = () => (dispatch) => {
    axios.get('https://aircall-job.herokuapp.com/activities')
    .then((res)=>{
        console.log("SUCCEEDED FETCHING CALLS TO STAGE FOR FINDING ARCHIVED ONES", res.data);
        let archCalls = [...res.data];
        // eslint-disable-next-line array-callback-return
        let archCallsFinal = archCalls.filter((individCall)=>{
            // eslint-disable-next-line eqeqeq
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

//[POST] Unarchived Call, 2 Actions Contained
export const unarchiveCall = (callToUnarchive) => (dispatch) => {

    const reformattedCallToUnarchive = { ...callToUnarchive,
        is_archived: false,
    }

    axios.post(`https://aircall-job.herokuapp.com/activities/${reformattedCallToUnarchive.id}`, reformattedCallToUnarchive)
    .then((res)=>{
        console.log("SUCCEEDED UN-ARCHIVING CALL", res.data);
        dispatch({ type: UN_ARCHIVE_CALL_SUCCESS, payload: res.data })
    })
    .catch((err)=>{
        console.log("FAILED UN-ARCHIVING CALL", err.message);
        dispatch({ type: UN_ARCHIVE_CALL_FAILURE, payload: err.message })
    })

}
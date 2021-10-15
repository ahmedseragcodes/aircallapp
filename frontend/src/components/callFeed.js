//Tech Imports
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { connect } from "react-redux";
//Comp Imports
import { fetchCalls, archiveCall } from "../store/actions";
//Styling Imports
import "../styling/callFeed.scss";
import Button from "@mui/material/Button";

const CallFeed = (props) => {

    const [refreshHold, setRefreshHold]=useState("");

    const history = useHistory();

    useEffect(()=>{
        props.fetchCalls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[refreshHold])

    //Upon clicking Details button on individual call this runs
    const getDetails = (callDetailsToGet) => {
        history.push(`/call/${callDetailsToGet.id}`)
    }
   

    return (
        <div className="callFeedContainer">
            {
                props.allCalls.map((call)=>{
                    return(
                        <div key={call.id} className="individualCallCard">
                            <p> {call.call_type} Call From {call.from} </p>
                            <Button onClick={()=>props.archiveCall(call)} >Archive</Button>
                            <Button onClick={()=>getDetails(call)} >Details</Button>
                        </div>
                    )
                })
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return ({
      allCalls: state.allCalls,
      archivedCalls: state.archivedCalls,
      error: state.error,
    })
  }
  
  export default connect(mapStateToProps, {fetchCalls, archiveCall})(CallFeed);
//Tech Imports
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";

const CallDetails = (props) => {

    const history = useHistory();
    const params = useParams();

    const [callToDisplay, setCallToDisplay]=useState({
        dateReceived: "",
        callStatus: "",
        callFrom: "",
        callTo: "",
        callDuration: null
    });

    /*
    Call Details
    Date Received: 
    Answered/Voicemail/Missed
    Call From
    Call To
    Call Duration
    */

    return (
        <div className="detailedCallContainer">
            <h3>Call Details</h3>
            <p>Call Type {callToDisplay.callStatus} From {callToDisplay.callFrom}</p>
            <p>Date Received {callToDisplay.dateReceived} </p>
            <p>Call From {callToDisplay.callFrom}</p>
            <p>Call To {callToDisplay.callTo} </p>
            <p>Call Duration {callToDisplay.callDuration} Seconds</p>
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
  
  export default connect(mapStateToProps, {})(CallDetails);
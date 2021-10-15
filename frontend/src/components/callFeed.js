//Tech Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
//Comp Imports
import { fetchCalls, archiveCall } from "../store/actions";
//Styling Imports
import "../styling/callFeed.scss";

const CallFeed = (props) => {

    const [refreshHold, setRefreshHold]=useState("");

    useEffect(()=>{
        props.fetchCalls();
    },[refreshHold])
    

    return (
        <div className="callFeedContainer">
            {
                props.allCalls.map((call)=>{
                    return(
                        <div className="individualCallCard">
                            <p> Incoming Call From {call.from} </p>
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
//Tech Imports
import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
//Styling Imports
import "../styling/callFeed.scss";
import Button from "@mui/material/Button";

const ArchivedCalls = (props) => {

  console.log("ARCHIVED CALLS", props.archivedCalls)

    return (
     
        <div className="callFeedContainer">
           {  props.archivedCalls.length > 0  ? (
                props.archivedCalls.map((call)=>{
                    return(
                        <div className="individualCallCard">
                            <p> {call.call_type} Call From {call.from} </p>
                            <Button>Archive</Button>
                        </div>
                    )
                })) : (
                  <Button>No Archived Calls</Button>
                )
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
  
  export default connect(mapStateToProps, {})(ArchivedCalls);
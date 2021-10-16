//Tech Imports
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
//Styling Imports
import "../styling/callDetails.scss";
import "../styling/app.css";
import Button from "@mui/material/Button";
//Comp Imports
import { fetchCalls } from "../store/actions";


const CallDetails = (props) => {

    const history = useHistory();
    const params = useParams();


    const [callToDisplay, setCallToDisplay]=useState({});

    //populating state
    useEffect(()=>{
        props.fetchCalls();
    },[])

    useEffect(()=>{
        let foundCall;
        const idToFind = params.id;
        console.log("Clicked on details, here's what all calls looks like", props.allCalls)
        props.allCalls.filter((uniqueCall)=>{
            if (uniqueCall.id == idToFind){
                foundCall= uniqueCall;
                return foundCall;
            } 
        })
        setCallToDisplay(foundCall);
        console.log("The Call That Will Be Displayed", foundCall);
    },[])

    //Upon clicking All Calls button, this runs and sends user back to calls and home route (same)
    const seeAllCalls = () => {
        history.push("/calls");
    }

    return (
        <div>
        {
            callToDisplay ? (
            <div className="detailedCallContainer">
            <h3>Call Details</h3>
            <p>Call Type {callToDisplay.call_type} From {callToDisplay.from}</p>
            <p>Date Received {callToDisplay.created_at} </p>
            <p>Call From {callToDisplay.from}</p>
            <p>Call To {callToDisplay.to} </p>
            <p>Call Duration {callToDisplay.duration} Seconds</p>
            <Button key={Math.random()} onClick={()=>props.archiveCall(callToDisplay)} >Archive</Button>
            <Button key={Math.random()} onClick={()=>seeAllCalls()}>All Calls</Button>
            </div>
            ) : (
                <div className="noDetailsContainer">
                    <Button key={Math.random()} style={{marginTop: "1em"}} onClick={()=>seeAllCalls()}>No Call Details To Display</Button>
                </div>
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
  
  export default connect(mapStateToProps, { fetchCalls, })(CallDetails);
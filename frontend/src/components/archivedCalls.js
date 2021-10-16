//Tech Imports
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
//Styling Imports
import "../styling/callFeed.scss";
import "../styling/app.css";
import Button from "@mui/material/Button";
//Comp Imports
import { fetchArchivedCalls, unarchiveCall } from "../store/actions";

const ArchivedCalls = (props) => {

  const history = useHistory();


  useEffect(()=>{
    props.fetchArchivedCalls();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  //Upon clicking All Calls button, this runs and sends user back to calls and home route (same)
  const seeAllCalls = () => {
    history.push("/calls");
}

    return (
     
        <div className="callFeedContainer">
          { props.archivedCalls.length > 0 && props.archivedCalls.map((call)=>{
                    return(
                        <div key={call.id} className="individualCallCard">
                            <p> 📞 {call.call_type.toUpperCase()} Call From {call.from} </p>
                            <Button key={Math.random()} onClick={()=>props.unarchiveCall(call)} >Unarchive</Button>
                        </div>
                    )
                }) 
          }
          {
            props.archivedCalls.length < 1 && (
            <div className="noArchivedCallsContainer"> 
              <Button key={Math.random()} style={{marginTop: "1em"}} onClick={()=>seeAllCalls()} >No Archived Calls</Button>
            </div>
            )}  
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
  
  export default connect(mapStateToProps, {fetchArchivedCalls, unarchiveCall})(ArchivedCalls);
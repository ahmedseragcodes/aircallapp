//Tech Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';
//Styling Imports
import "../styling/callFeed.scss";
import Button from "@mui/material/Button";
//Comp Imports
import { fetchArchivedCalls, unarchiveCall } from "../store/actions";

const ArchivedCalls = (props) => {

  const [archCalls, setArchCalls] = useState([]);

  useEffect(()=>{
    props.fetchArchivedCalls();
  },[])

    return (
     
        <div className="callFeedContainer">
          { props.archivedCalls.length > 0 && props.archivedCalls.map((call)=>{
                    return(
                        <div key={call.id} className="individualCallCard">
                            <p> {call.call_type} Call From {call.from} </p>
                            <Button onClick={()=>props.unarchiveCall(call)} >Unarchive</Button>
                        </div>
                    )
                }) 
          }
          {
            props.archivedCalls.length < 1 && <Button style={{marginTop: "1em"}}>No Archived Calls</Button> 
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
  
  export default connect(mapStateToProps, {fetchArchivedCalls, unarchiveCall})(ArchivedCalls);
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from "react-redux";

const CallFeed = () => {

    const [allCalls, setAllCalls]= useState([]);

    return (
        <div className="callFeedContainer">

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
  
  export default connect(mapStateToProps, {})(CallFeed);
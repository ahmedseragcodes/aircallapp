import React, { useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';

const ArchivedCalls = () => {
    return (
        <div className="archivedCallsContainer">
            
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
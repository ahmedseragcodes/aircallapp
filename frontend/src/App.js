//Tech Imports
import React, { useState } from 'react';
import { connect } from "react-redux";
//Styling Imports
import "./styling/app.css";
import "./styling/body.css";
import "./styling/header.css";
//Comp Imports
import Header from "./components/header";
import CallFeed from "./components/callFeed";
import ArchivedCalls from "./components/archivedCalls";

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <CallFeed />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    allCalls: state.allCalls,
    archivedCalls: state.archivedCalls,
    error: state.error,
  })
}

export default connect(mapStateToProps, {})(App);

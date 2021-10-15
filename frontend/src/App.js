//Tech Imports
import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
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
      <div className="callFeedNavContainer">
        <nav className="callFeedNav">
          <Link to="/">Home</Link>
          <Link to="/calls">Calls</Link>
          <Link to="/archived">Archived Calls</Link>
        </nav>
      </div>
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

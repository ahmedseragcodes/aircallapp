//Tech Imports
import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
//Styling Imports
import "./styling/app.css";
import "./styling/body.css";
import "./styling/header.css";
import "./styling/nav.scss";
import Button from "@mui/material/Button";
//Comp Imports
import Header from "./components/header";
import CallFeed from "./components/callFeed";
import ArchivedCalls from "./components/archivedCalls";
import CallDetails from "./components/callDetails";

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="callFeedNavContainer">
        <nav className="callFeedNav">
          <Button style={{backgroundColor: "#32CD32"}}><Link to="/">Activity</Link></Button> 
          <Button ><Link to="/calls">Calls</Link></Button>
          <Button ><Link to="/archived">Archived Calls</Link></Button>
        </nav>
      </div>
      {/* <div className="container-view">
        <CallFeed />
      </div> */}
      <Switch>
        <Route exact path="/">
          <div className="container-view">
            <CallFeed />
          </div>
        </Route>
        <Route path="/calls">
          <div className="container-view">
            <CallFeed />
          </div>
        </Route>
        <Route path="/archived">
          <div className="container-view">
            <ArchivedCalls />
          </div>
        </Route>
        <Route path="/call/:id">
          <div className="container-view">
            <CallDetails />
          </div>
        </Route>
      </Switch>
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

import "./index.css";
// import "react-notifications/lib/notifications.css";
// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Map from "./Map";
import Stops from "./components/Stops";
import Dash from "./components/Dash";
import Search from "./components/Search";
import P2P from "./components/P2P";

function App() {
  return (
    <div className="flex justify-center items-center h-screen p-0">
      <div className="min-w-[390px] w-[400px] flex flex-col p-0 bg-gray-900">
        <Router>
          <Switch>
            <Route path="/">
              <AppLayout>
                <Switch>
                  <Route exact path="/" component={Dash} />
                  <Route exact path="/stops" component={Stops} />
                  <Route exact path="/map" component={Map} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/ptop" component={P2P} />
                  {/*   <Route exact path="/classes">
                  <Classes openAddModal={openAddModal} />
                </Route>
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/sessions" component={Sessions} /> */}
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

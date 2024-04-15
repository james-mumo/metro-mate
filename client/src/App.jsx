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

function App() {
  return (
    <div className="flex justify-center items-center h-screen p-0">
      <div className="min-w-[390px] w-[400px] border flex flex-col p-0">
        <Router>
          <Switch>
            <Route path="/">
              <AppLayout>
                <Switch>
                  <Route exact path="/" component={Map} />
                  <Route exact path="/stops" component={Stops} />
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

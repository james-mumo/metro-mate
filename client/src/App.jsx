import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Map from "./screens/Map";
import Stops from "./screens/Summ";
import Dash from "./screens/Dash";
import Search from "./screens/Search";
import Notice from "./screens/Notice";
import P2P from "./P2P";
import Modal from "./screens/Modal";
import Settings from "./screens/Settings";
import { AppProvider } from "./AppContext"; // Import the AppProvider component

function App() {
  return (
    <AppProvider>
      {" "}
      {/* Wrap your entire application with AppProvider */}
      <div className="flex justify-center items-center h-screen p-0">
        <div className="min-w-[390px] w-[400px] flex flex-col p-0 bg-gray-900 relative">
          <Router>
            <Switch>
              <Route path="/">
                <AppLayout>
                  <Switch>
                    <Route exact path="/" component={Dash} />
                    <Route exact path="/home" component={Dash} />
                    <Route exact path="/summ" component={Stops} />
                    <Route exact path="/map" component={Map} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/ptop" component={P2P} />
                    <Route exact path="/notice" component={Notice} />
                    <Route exact path="/settings" component={Settings} />
                    {/* Add route for UserDetails */}
                  </Switch>
                </AppLayout>
              </Route>
            </Switch>
          </Router>

          <Modal />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;

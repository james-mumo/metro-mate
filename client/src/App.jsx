// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Map from "./screens/Map";
import Stops from "./screens/Summ";
import Dash from "./screens/Dash";
import Search from "./screens/Search";
import Notice from "./screens/Notice";
import P2P from "./components/P2P";
import Modal from "./screens/Modal"; // Import Modal component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen p-0">
      <div className="min-w-[390px] w-[400px] flex flex-col p-0 bg-gray-900 relative">
        <Router>
          <Switch>
            <Route path="/">
              <AppLayout>
                <Switch>
                  <Route exact path="/home" component={Dash} />
                  <Route exact path="/summ" component={Stops} />
                  <Route exact path="/map" component={Map} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/ptop" component={P2P} />
                  <Route exact path="/notice" component={Notice} />
                </Switch>
              </AppLayout>
            </Route>
          </Switch>
        </Router>

        {/* Render the Modal component */}
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default App;

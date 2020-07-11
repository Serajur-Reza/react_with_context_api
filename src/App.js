import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Modal from "./Components/Modal/Modal";

let theme = {
  back: "#000000",
  font: "#ffffff",
};

export let Dark = React.createContext();

function App() {
  let [showComp, setShowComp] = useState(true);

  const handleClick = () => {
    showComp = true;
    setShowComp(showComp);
  };

  return (
    <Dark.Provider value={theme}>
      <div className="App">
        <div className="sign-in-button">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#staticBackdrop"
          >
            Sign In
          </button>

          {showComp && <Modal />}
        </div>
      </div>
    </Dark.Provider>
  );
}

export default App;

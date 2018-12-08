import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SwithContainer from "./switchContainer";

const handleOnToggle = on => {
  console.log("handleOnToggle", on);
};

function App() {
  return (
    <div className="App">
      <SwithContainer onToggle={handleOnToggle}>
        <SwithContainer.On>
          <h2>On</h2>
        </SwithContainer.On>
        <SwithContainer.Off />
        <div>
          <SwithContainer.Switch />
        </div>
      </SwithContainer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

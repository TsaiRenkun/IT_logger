import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    //init Materialize Js
    M.AutoInit();
  });

  return <div className="App">HELLO REACT</div>;
};

export default App;

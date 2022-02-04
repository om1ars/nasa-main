import React from "react";
import { BrowserRouter } from "react-router-dom";


import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>
);

export default App;

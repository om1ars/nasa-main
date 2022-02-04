import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
    <Homepage />
  </BrowserRouter>
);

export default App;

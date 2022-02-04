import React from "react";
import { BrowserRouter, Route,  } from "react-router-dom";


import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
  <Switch>
    <Route path='' />
  </Switch>
  </BrowserRouter>
);

export default App;

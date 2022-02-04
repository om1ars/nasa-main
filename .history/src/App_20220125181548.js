import React from "react";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";


import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/about' element={<Homepage />} />
  </Routes>
  </BrowserRouter>
);

export default App;

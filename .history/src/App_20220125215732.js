import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Homecomponents/containers";
import Aboutpage from "./pages/Aboutpage";

import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Homepage />} /> */}
      <Route path="/about" element={<Aboutpage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

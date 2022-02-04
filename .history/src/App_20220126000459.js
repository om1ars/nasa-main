import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Homecomponents";
import { Footer,  } from "./components/Homecomponents/containers";
import Aboutpage from "./pages/Aboutpage";

import Homepage from "./pages/Homepage";

const App = () => (
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/portfolio" element={<Aboutpage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

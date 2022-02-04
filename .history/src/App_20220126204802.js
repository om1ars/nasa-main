import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Homecomponents";
import { Footer,  } from "./components/Homecomponents/containers";
import Aboutpage from "./pages/Aboutpage";
import Blogspage from "./pages/Blogspage";
import Contactpage from "./pages/Contactspage";
import Homepage from "./pages/Homepage";
import Portfoliopage from "./pages/Portfoliopage";

const App = () => (
  <BrowserRouter>
  <Global
  <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/portfolio" element={<Portfoliopage />} />
      <Route path="/blogs" element={<Blogspage />} />
      <Route path="/contacts" element={<Contactpage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

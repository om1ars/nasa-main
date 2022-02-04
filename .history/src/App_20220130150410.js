import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./components/Global";
import { Navbar } from "./components/Homecomponents";
import { Footer } from "./components/Homecomponents/containers";
import RotateText from "./components/RotateText";
import Aboutpage from "./pages/Aboutpage";
import Blogspage from "./pages/Blogspage";
import Contactpage from "./pages/Contactspage";
import Homepage from "./pages/Homepage";
import Portfoliopage from "./pages/Portfoliopage";
import SinglePortfolioPage from "./pages/SinglePortfolioPage";
import Teammember from "./pages/TeamMember";
import portfolioMenu from "./utils/portfolio";
const App = () => (
  <BrowserRouter>
    {/* <Global /> */}
    <Navbar />
    <Routes>
      <Route path="/" component={Homepage } />
      <Route path="/about" component={Aboutpage } />
      <Route path="/portfolio" component={Portfoliopage } />
      <Route path="/blogs" component={Blogspage } />
      <Route path="/contacts" component={Contactpage } />
      <Route path="/team-member/:id" components={<Teammember />} />
      <Route
        path="/portfolio/:id"
        element={<SinglePortfolioPage portfolioMenu={portfolioMenu} />}
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;

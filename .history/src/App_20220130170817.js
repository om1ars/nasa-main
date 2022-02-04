import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import SingleServicesPage from "./pages/SingleServicesPage";
import Teammember from "./pages/TeamMember";
import portfolioMenu from "./utils/portfolio";
const App = () => (
  <BrowserRouter>
    {/* <Global /> */}
    <Navbar />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={Aboutpage} />
      <Route exact path="/portfolio" component={Portfoliopage} />
      <Route path="/blogs" component={Blogspage} />
      <Route path="/contacts" component={Contactpage} />
      <Route path="/portfolio/:category/:id">
        <SinglePortfolioPage portfolioMenu={portfolioMenu} />
      </Route>
      <Route path="/serviced/:slug">
        <SingleServicesPage />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;

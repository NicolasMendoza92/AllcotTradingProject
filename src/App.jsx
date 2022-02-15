import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


//router dom
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";

//main components
import { NavbarMain } from "./components/navbarMain/NavbarMain";
import { Footer } from "./components/footer/Footer";


function App() {


  return (
    <div className="footer-fix ">
      <NavbarMain/>
      <Switch>
        {/* pages */}
        <Route path="/" exact >
          <Home />
        </Route>

        <Route path="/about" >
          <About />
        </Route>


        <Route path="/contact" >
          <Contact />
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import axios from 'axios'

//router dom
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from './pages/Home'
import About from "./pages/About";
import Contact from "./pages/Contact";

//main components
import { SpinnerRW } from "./components/spinner/SpinnerRW";
import { NavbarMain } from "./components/navbarMain/NavbarMain";
import { Footer } from "./components/footer/Footer";
// utils

function App() {

  const [busqueda, setBusqueda] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <SpinnerRW />
    );
  }

  return (
    <div className="footer-fix ">
      <NavbarMain
        setBusqueda={setBusqueda}
      />
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

        <Route path="/register" >
          <Register />
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

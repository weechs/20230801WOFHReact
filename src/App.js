import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { xmas, box, nye, nyd } from "./components/Xmas.js";
import Discover from "./pages/discover";
import Enquire from "./pages/enquire";
import Home from "./pages/home";
import Journey from "./pages/journey";
import Partnership from "./pages/partnership";
import Professionals from "./pages/professionals";
import Support from "./pages/support";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Snow from "./components/Snowflake";
import Fireworks from "./components/Fireworks";
import PageNotFound from "./components/NotFoundPage";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div>
        {new Date() >= new Date(xmas) && new Date() <= new Date(box) ? (
          <Snow />
        ) : null}
      </div>
      <div>
        {new Date() >= new Date(nye) && new Date() <= new Date(nyd) ? (
          <Fireworks />
        ) : null}
      </div>
      <Routes>
        <Route path="/discover" exact element={<Discover />}></Route>
        <Route path="/enquire" exact element={<Enquire />}></Route>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/journey" exact element={<Journey />}></Route>
        <Route path="/partnership" exact element={<Partnership />}></Route>
        <Route path="/professionals" exact element={<Professionals />}></Route>
        <Route path="/support" exact element={<Support />}></Route>
        <Route path="*" exact element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

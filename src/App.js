import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Fund from "./Components/Fund Section/index";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import MatchHistory from "./Components/MatchHistory";
import ScrollToTop from "./Components/ScrollToTop";
import MatchDetails from "./Components/MatchDetails";
import PlayerDetails from "./Components/PlayerDetails";
import ScrollButton from "./Components/ScrollButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlayerDetailsPageSystem from "./Components/PlayerDetailsPageSystem";

function App() {
  
  const [activeLink, setActiveLink] = useState(1);
  const [showModal, setShowModal] = useState(false);

  // comment 
  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <Router>

        <ScrollToTop />

        <Navbar showLink={activeLink} setShowLink={setActiveLink} showModal={showModal} />

        <Routes>

          <Route exact path="/" element={<Home setShowModal={setShowModal} />} />

          <Route exact path="/funds" element={<Fund setShowModal={setShowModal} />} />

          <Route exact path="/team" element={<Team showModal={showModal} setShowModal={setShowModal} />} />

          <Route exact path="/match-history" element={<MatchHistory showModal={showModal} setShowModal={setShowModal} />} />
          <Route exact path="/match-details/:matchId" element={<MatchDetails showModal={showModal} setShowModal={setShowModal} />} />
           <Route exact path="/player-details/:playerName" element={<PlayerDetailsPageSystem showModal={showModal} setShowModal={setShowModal} />} />

        </Routes>

        <ScrollButton />

        <Footer setShowLink={setActiveLink} showModal={showModal} />

      </Router>

    </div >
  );
}

export default App;

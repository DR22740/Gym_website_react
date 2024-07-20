import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import OurProcess from './components/OurProcess';
import Packages from './components/Packages';
import Consultation from './components/Consultation';
import JoinTeam from './components/JoinTeam';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Gym_website_react" element={<MainContent />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

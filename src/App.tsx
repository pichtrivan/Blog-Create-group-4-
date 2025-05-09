import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"; // Ensure correct import path for the header
import Footer from "./components/footer"; // Ensure correct import path for the footer
import Home from "./page/home"; // Ensure correct import path for Home page
import About from "./page/about"; // Ensure correct import path for About page
import Blog from "./page/blog"; // Ensure correct import path for Blog page
import TravelStyles from "./page/contact"; // Ensure correct import path for TravelStyles page
import Login from "./page/login"; // Ensure correct import path for Login page

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/travel-styles" element={<TravelStyles />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;

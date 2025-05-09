import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import About from "./page/about";
import Blog from "./page/blog";
import TravelStyles from "./page/contact";
import Login from "./page/login";
import Sponsor from "./page/sponsor"; // ✅ Capitalized import

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/travel-styles" element={<TravelStyles />} />
        <Route path="/sponsor" element={<Sponsor />} /> {/* ✅ Capitalized usage */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

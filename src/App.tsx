import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import About from "./page/about";
import Blog from "./page/blog";
import Contact from "./page/contact";
import Login from "./page/login";
import Sponsor from "./page/sponsor";
import Register from "./page/register";
import OnChange from "./page/onchange";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* <main className="min-h-screen px-4 py-6"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onchange" element={<OnChange />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

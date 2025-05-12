import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import About from "./page/about";
import Blog from "./page/blog";
import Contact from "./page/contact";
import Login from "./page/login";
import Sponsor from "./page/sponsor"; // ✅ Capitalized import
=======
import { Routes, Route } from "react-router-dom";
import Header from "./components/header"; // Ensure correct import path for the header
import Footer from "./components/footer"; // Ensure correct import path for the footer
import Home from "./page/home"; // Ensure correct import path for Home page
import About from "./page/about"; // Ensure correct import path for About page
import Login from "./page/login"; // Ensure correct import path for Login page
import Blog from "./page/blog-detail";
>>>>>>> blog-detail

const App: React.FC = () => {
  return (
    <>
      <Header />
<<<<<<< HEAD
=======

>>>>>>> blog-detail
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
<<<<<<< HEAD
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
=======
        <Route path="/login" element={<Login />} />
      </Routes>

>>>>>>> blog-detail
      <Footer />
    </>
  );
};

export default App;

// // src/App.tsx
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import BlogDetailPage from "./page/blog-detail"; // Corrected the file path

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/blog/koh-kong-krao" element={<BlogDetailPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

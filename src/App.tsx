import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import About from "./page/about";
import Blog from "./page/blog";
import Contact from "./page/contact";
import Login from "./page/login";
import Sponsor from "./page/sponsor"; // ✅ Capitalized import

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
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

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header"; // Ensure correct import path for the header
import Footer from "./components/footer"; // Ensure correct import path for the footer
import Home from "./page/home"; // Ensure correct import path for Home page
import About from "./page/about"; // Ensure correct import path for About page
import Login from "./page/login"; // Ensure correct import path for Login page
import Blog from "./page/blog-detail";

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
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

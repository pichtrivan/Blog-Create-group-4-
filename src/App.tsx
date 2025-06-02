import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./page/home";
import About from "./page/about";
import Blog from "./page/blog";
import Contact from "./page/contact";
import Login from "./page/login";
import Sponsor from "./page/sponsor";
import Register from "./page/register";
import AuthLayout from "./Router.public/authLayout";
import Author from "./page/author";

import ProfileAuthor from "./components/Profileauthor";
import BlogDetail from "./page/blog-detail";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/author" element={<Author />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Profileauthor" element={<ProfileAuthor />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
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

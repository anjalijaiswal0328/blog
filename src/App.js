import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogListingPage from "./pages/BlogListingPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import { generateBlogs } from "./utils";
import Navbar from "./components/Navbar";

function App() {
  const [blogs, _] = useState(generateBlogs(10));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<BlogListingPage blogs={blogs} />} />
        <Route path="/blog/:id" element={<SingleBlogPage blogs={blogs} />} />
      </Routes>
    </Router>
  );
}

export default App;

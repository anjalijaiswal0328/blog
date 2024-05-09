// BlogListingPage.js
import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import SortFilter from "../components/SortFilter";
import { generateBlogs } from "../utils"; // Sample data for demonstration

function BlogListingPage({ blogs = [] }) {
  const [filteredBlogs, setFilteredBlogs] = useState(generateBlogs(10));
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    // Filter blogs based on search query
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Sort filtered blogs
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "popularity") {
      filtered.sort((a, b) => b.likes - a.likes);
    }
    setFilteredBlogs(filtered);
  }, [searchQuery, sortBy]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SortFilter onChange={handleSortChange} />
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogListingPage;

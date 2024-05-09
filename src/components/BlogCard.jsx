// BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  console.log("Blog : ", blog);

  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <div>
        Tags:{" "}
        {blog.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Link to={`/blog/${blog.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

function BlogDescription({ blog }) {
  return (
    <div className="single-blog">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <div>
        Tags:{" "}
        {blog.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{blog.content}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default BlogDescription;

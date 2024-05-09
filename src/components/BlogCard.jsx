// BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  console.log("Blog : ", blog);

  return (
    <div className="blog-card">
      <img
        src={blog.image}
        alt={blog.title}
        style={{ height: "200px", width: "100%" }}
      />
      <h2>{blog.title.toUpperCase()}</h2>
      <p>{blog.description}</p>
      <div>
        Tags:{" "}
        {blog.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/blog/${blog.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default BlogCard;

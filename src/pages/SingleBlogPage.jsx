// SingleBlogPage.js
import React from "react";
import { useParams } from "react-router-dom";

function SingleBlogPage({ blogs = [] }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

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
    </div>
  );
}

export default SingleBlogPage;

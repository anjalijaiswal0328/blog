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
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <div>
        Tags:{" "}
        {blog.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>{blog.content}</p>
    </div>
  );
}

export default SingleBlogPage;

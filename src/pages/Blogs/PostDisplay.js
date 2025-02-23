import React from "react";

function PostDisplay({blogs=[], handleDeletePost}) {
  return (
    <div data-testid="posts-container" className="posts-container flex wrap gap-10">
      {blogs.length > 0 && blogs.map((blog) => (
        <div className="post-box" key={blog.id}>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <button 
          onClick={() => handleDeletePost(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PostDisplay;

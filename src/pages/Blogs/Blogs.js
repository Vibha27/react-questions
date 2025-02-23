import React, { useState } from "react";
import BlogInput from "./BlogInput";
import PostDisplay from "./PostDisplay";

function Blogs() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  const handleCreatePost = () => {
    if (title.trim() && description.trim()) {
      let post = {
        title,
        description,
        id: blogs.length + 1
      }
      setBlogs([...blogs, post]);
  
      setTitle("");
      setDescription("");  
    }
  }

  const handleDeletePost = (id) => {
    if (id) {
      setBlogs(blogs.filter(blog => blog.id !== id))
    }
  }

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <BlogInput   
        title={title}
        description={description}
        handleTitleChange={handleTitleChange}
        handleDescriptionChange={handleDescriptionChange} /><br/>
        <button data-testid="create-button" className="mt-10" 
        onClick={handleCreatePost}>
          Create Post
        </button>
      </div>
      <br/>
      <div className="posts-section">
        <PostDisplay blogs={blogs}
        handleDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default Blogs;

import React from "react";

function BlogInput({ 
  title,
  description,
  handleTitleChange, 
  handleDescriptionChange 
}) {
  return (
    <div className="layout-column justify-content-center align-items-center">
        <br/>
      <input className="w-100" type="text" placeholder="Enter Title" value={title} data-testid="title-input" 
      onChange={handleTitleChange} /><br /><br />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={description} 
      onChange={handleDescriptionChange} 
      data-testid="description-input" />
    </div>
  );
}

export default BlogInput;

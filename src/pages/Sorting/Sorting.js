import React, { useState, useEffect } from "react";
import { ARTICLES_DATA } from "./constant";
import Display from "./Display";


function Sorting({ articles = ARTICLES_DATA }) {
  
  const [sorted, setSorted] = useState(articles);

  useEffect(() => {
    handleMostUpvoted();
  }, [])

  const handleMostUpvoted = () => {
    // Logic for most upvoted articles
    setSorted(articles.toSorted((a,b) => b.upvotes - a.upvotes));
  };

  const handleMostRecent = () => {
    // Logic for most recent articles
    setSorted(articles.toSorted((a,b) => new Date(b.date) - new Date(a.date)));
  };
  return (
    <>
      <div className="post-box">
        <div className="App layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label> {" "}
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>{" "}
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Display articles={sorted} />
      </div>
    </>
  );
}

export default Sorting;

import React from "react";

function Display({ articles = [] }) {

  return (
    <div className="card w-80 mx-auto">
      <table className="">
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => <tr data-testid="article" key={`article-${index}`}>
            <td data-testid="article-title">
              {article.title || ""}</td>
            <td data-testid="article-upvotes">
              {article.upvotes || 0}</td>
            <td data-testid="article-date">
              {article.date || ""}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default Display;

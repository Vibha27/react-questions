import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbItem({ item, index }) {
  return item.link ? (
    <Link to={item.link}>{item.title || ""}</Link>
  ) : (
    <span>{item.title || ""}</span>
  );
}

export default BreadcrumbItem;

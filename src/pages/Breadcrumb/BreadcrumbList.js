import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

function BreadcrumbList({ list = [] }) {
  let arrLen = list.length;
  return arrLen > 0
    ? list.map((ele, index) => (
        <span key={index}>
          <BreadcrumbItem item={ele} index={index} /> {index < arrLen - 1 && ">"}
        </span>
      ))
    : null;
}

export default BreadcrumbList;

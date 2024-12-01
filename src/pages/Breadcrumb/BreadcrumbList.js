import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

function BreadcrumbList({ list = [] }) {
  let arrLen = list.length;
  return arrLen > 0
    ? list.map((ele, index) => (
        <>
          <BreadcrumbItem item={ele} key={index} /> {index < arrLen - 1 && ">"}
        </>
      ))
    : null;
}

export default BreadcrumbList;

import React from "react";
import BreadcrumbList from "./BreadcrumbList";

function Breadcrumb() {
  let breadcrumbList = [
    { title: "Home", link: "/" },
    { title: "Breadcrumb", link: "" },
  ];
  return (
    <>
      <h3>Breadcrumb</h3>
      <BreadcrumbList list={breadcrumbList} />
    </>
  );
}

export default Breadcrumb;

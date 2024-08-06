import React from "react";
import { PageContainer, SinglePage } from "./style";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

function Pagination({ 
    pageNo, 
    count, 
    perPage = 100, 
    handlePageChange 
}) {
  const pages = Math.ceil(count / perPage);
  return (
    <PageContainer>

      <SinglePage disabled={pageNo===1}>
        <MdArrowLeft 
        size={32} 
        onClick={() => pageNo===1 ? null : handlePageChange(pageNo-1, perPage)} 
        />
      </SinglePage>

      {[...Array(pages)].map((page, i) => (
        <SinglePage 
        disabled={pageNo===i+1}
        key={i} 
        onClick={() => pageNo===i+1 ? null : handlePageChange(i + 1, perPage)}>
          {i + 1}
        </SinglePage>
      ))}

      <SinglePage disabled={pageNo===pages}>
        <MdArrowRight 
        size={32} 
        onClick={() => pageNo===pages ? null : handlePageChange(pageNo+1, perPage)}
        />
      </SinglePage>

    </PageContainer>
  );
}

export default Pagination;

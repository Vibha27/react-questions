import React, { useCallback, useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "./Pagination";

function Pages() {
  const [bookList, setBookList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const controllerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async (pageNo = 1, offset = 0) => {
    try {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();

      const getBooksList = await fetch(
        "https://openlibrary.org/search.json?" +
          new URLSearchParams({
            q: "spiderman",
            page: pageNo,
            offset,
          }),
        {
          signal: controllerRef.current.signal,
        }
      );
      const bookData = await getBooksList.json();
      setBookList(bookData.docs || []);
      setTotalCount(bookData.numFound || 0);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handlePageChange = (page, perPage) => {
    setPage(page)
    fetchData(page, (page - 1) * perPage + 1); // 1 200 2-1 * 200 + 1
  };

  return (
    <>
      <h3>Total Books: {totalCount} </h3>
      <h4>Page No: {page}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Read Count</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book.key}>
              <td>{book.title || "-"}</td>
              <td>{book.type || "-"}</td>
              <td>{book.want_to_read_count || "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Pagination
        count={totalCount}
        pageNo={page}
        handlePageChange={handlePageChange}
      />
    </>
  );
}

export default Pages;

import { useCallback, useEffect, useRef, useState } from "react";

function InfiniteScroll(props) {
  const { renderListItem, getData, listData, query } = props;
  const observer = useRef(null);
  const lastElementObserver = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect(); // to disconnect existing intersection to prevent multiple scroll event called

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        pageNumber.current += 1;
        fetchData();
      }
    });
    if (node) observer.current.observe(node); // observe element which has ref (last element)
  });

  const pageNumber = useRef(1);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    getData(query, pageNumber.current).finally(() => {
      setLoading(false);
    });
  }, [query]);

  const renderList = useCallback(() => {
    return listData.map((item, index) => {
      if (index === listData.length - 1)
        return renderListItem(item, index, lastElementObserver);
      return renderListItem(item, index, null);
    });
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {renderList()}
      {loading && "Loading..."}
    </div>
  );
}

export default InfiniteScroll;

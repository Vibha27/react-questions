import { useCallback, useRef, useState } from "react";
import InfiniteScroll from "./InfiniteScroll";

function Form() {

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const controllerRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const renderItem = useCallback(({title}, key, ref) => <div key={key} ref={ref}>{title}</div>)

  const getData = useCallback((query, pageNumber) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (controllerRef.current) controllerRef.current.abort()
                controllerRef.current = new AbortController();

            const promise = await fetch("https://openlibrary.org/search.json?"+ new URLSearchParams({
                q: query,
                page: pageNumber
            }), {
                signal: controllerRef.current.signal
            })
            const data = await promise.json();
            resolve()
            setData(prevData => [...prevData, ...data.docs])
        } catch (e) {
            // reject(e)
        }
    })
  }, [])

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
    
        <InfiniteScroll 
        renderListItem={renderItem}
        getData={getData}
        listData={data}
        query={query}
        />
    </div>
  );
}

export default Form;

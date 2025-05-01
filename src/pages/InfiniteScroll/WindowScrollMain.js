import { useEffect, useState } from "react"
import { WindowScroll } from "./WindowScroll";

export const WindowScrollMain = () => {

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = (page=0) => {
        setIsLoading(true);
        fetch(`https://openlibrary.org/search.json?q=spider&offset=10&page=${page}`)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            if (data && data.docs) {
                setList(prevData => [...prevData, ...data.docs])
            }
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const MessageList = ({ title, first_publish_year }) => {
        return <div style={{ padding: "10px", border: "1px solid gray", width: "350px", margin: "10px", borderRadius: "8px" }}>
            <h4>{title}</h4>
            <h5>{first_publish_year}</h5>
        </div>
    };

    return (
        <div>
            <h1>Infinite Scroll using Window inner height</h1>
            <WindowScroll
            renderView={MessageList}
            listData={list}
            fetchData={fetchData}
            isLoading={isLoading}
            />

        </div>
    )
}
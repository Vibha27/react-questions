import { useEffect, useState } from "react"

export const WindowScroll = ({
    renderView,
    listData,
    fetchData,
    isLoading
}) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page)
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    const handleScroll = () => {
        // scrollHeight : It is the property that returns the total height of the content, including the portion that is not visible on the screen. So, it will be the total scrollable area.
        // scrollY: It is the property that returns the number of pixels that the document has been scrolled vertically from the top. So it will be the area that has been scrolled.
        // innerHeight: It is the property that return the height of the browser’s Windows content area. 
        // It will be the scrollbar width. It is added to scrollY so that fetch happens when we reached the content rather than when we passed the content.
        if (document.getElementById("windowScroll").scrollHeight < window.scrollY + window.innerHeight) {
            setPage(prev => prev + 1)
        }
    }

    return <div id="windowScroll">
        {listData.length > 0 && listData.map(item => renderView(item))}
        {isLoading && "Loading..."}
    </div>
}
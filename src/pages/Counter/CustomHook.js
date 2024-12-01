import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => {
            res.json();
            setLoading(false);
        })
        .then(data => setData(data))
        .catch(err => {
            setLoading(false);
            setError(err)
        })
    }, [url])
    return [loading, data, error]
}

export const useToggle = (defaultValue) => {
    const [show, setShow] = useState(defaultValue);

    const toggleShow = (value) => {
        setShow(value)
    }
    return [show, toggleShow]
}
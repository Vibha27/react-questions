import { useEffect, useState } from "react"

export const useFetch = (api) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setData(data)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err)
        })

    }, [api])

    return { isLoading, data, error }
}
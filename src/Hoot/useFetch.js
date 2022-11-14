import { useCallback, useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, dataSet ] = useState(null)
    const [ loading, setLoading] = useState(true)
    const [ error, setError] = useState(null)

    console.log("useFetch")

    const fetchData = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json();
            if(!res.ok) throw Error('Lo siento fallo la API')
            dataSet(data)
        } catch (error) {
            setError(error.message)
            dataSet([data])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

       return {data, loading, error}
}

export default useFetch
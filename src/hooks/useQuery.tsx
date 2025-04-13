import { useEffect, useState } from "react";

export default function UseQuery<T>(query: Promise<T>){
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(()=>{
        setIsLoading(true)
        query
            .then(res => setData(res))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [query])

    return {
        result: data,
        isLoading,
        error
    }
}
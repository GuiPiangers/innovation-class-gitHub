import { useEffect, useState } from "react";

export default function useQuery<T>(query: Promise<T>){
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error>()

    useEffect(()=>{
        setIsLoading(true)
        console.log("chegou aqui")
        query
            .then(res => setData(res))
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false)}
            )
    }, [])

    return {
        result: data,
        isLoading,
        error
    }
}
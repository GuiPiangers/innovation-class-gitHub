import { useCallback, useState } from "react";

export default function useQuery<T, n>(queryFn: (param: n) => Promise<T>){
    const [data, setData] = useState<T>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error>()
    
    const query = useCallback((params: n) => {
        setIsLoading(true)
        setError(undefined)
        queryFn(params)
            .then(res => setData(res))
            .catch(error => setError(error))
            .finally(() => {
                setIsLoading(false)}
            )
                    
    }, [queryFn])

    return {
        query,
        result: data,
        isLoading,
        error
    }
}
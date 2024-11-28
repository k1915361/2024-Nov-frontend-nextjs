import { useState, useEffect } from "react";

export const useFetch = (route, fetcher, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; 

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const result = await fetcher(route, options);
                if (isMounted) setData(result);
            } catch (err) {
                if (isMounted) setError(err.message || "An error occurred");
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [route, fetcher, options]);

    return { data, error, isLoading };
};
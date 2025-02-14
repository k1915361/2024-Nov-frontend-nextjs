'use client'

import { useState, useEffect, useRef } from "react";
import { API_ROOT } from "../login/fetchData";

/** Pass undefined to keep default parameter values and then override values like f(route, undefined, root) */
export function useFetch(
    apiRoute, 
    customSetStateFunction = (v) => v,
    apiRoot = API_ROOT, 
    apiSeparator = '/', 
    customFetch = fetch,
    fetchInit = { credentials: 'include' },
    maxRetries = 3, 
    retryDelay = 1000
) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const retryCount = useRef(0); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customFetch(`${apiRoot}${apiSeparator}${apiRoute}`, fetchInit);

                if (!response.ok) {
                    if (retryCount.current < maxRetries) {
                        console.log(`Retrying (${retryCount.current + 1}/${maxRetries}) for ${apiRoute}...`);
                        retryCount.current++;
                        await new Promise(resolve => setTimeout(resolve, retryDelay)); 
                        return fetchData(); 
                    } else {
                        console.error(`Max retries (${maxRetries}) reached for ${apiRoute}. Giving up.`);
                        const errorData = await response.json(); 
                        throw new Error(errorData.detail || `HTTP error ${response.status}`); 
                    }
                }

                const contentType = response.headers.get('Content-Type'); 
                if (contentType && contentType.includes('application/json')) { 
                    const jsonData = await response.json();
                    setData(customSetStateFunction(jsonData));
                } else {
                    const textData = await response.text();
                    setData(customSetStateFunction(textData));
                }

            } catch (err) {
                console.error("Fetch error:", err);
                setError(err);
            } finally {
                setLoading(false);
                retryCount.current = 0; 
            }
        };

        fetchData();
    }, []); 
    return { data, loading, error };
}

export function ifLoadingOrErrorDisplay(loading, error) {
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error && error?.message) {
        return (
            <div>
                Error: {error.message} {/* Display the error message to the user */}
                {/* You can also display more detailed error info if needed: */}
                {/* <pre>{error.stack}</pre>  */} {/* For debugging, but generally don't show to users */}
            </div>
        );
    }
}

function UseFetchExperimentalWrapperComponent({children}) {
    const { data, loading, error } = UseFetchAndSetStateExperimental(apiRoute);

    display = ifLoadingOrErrorDisplay(loading, error)
    if (display) {
        return display
    }

    return (
        <>
            {children}
        </>
    )
}

/** @deprecated. To be removed.
 */
export const useFetchDeprecated = (route, fetcher, options = {}) => {
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
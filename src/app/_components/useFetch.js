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
) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const url = `${apiRoot}${apiSeparator}${apiRoute}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customFetch(url, fetchInit);
                const contentType = response.headers.get('Content-Type'); 
                
                if (contentType && contentType.includes('application/json')) {                    
                    const jsonData = await response.json();
                    setData(customSetStateFunction(jsonData));
                } else {
                    const textData = await response.text();
                    setData(customSetStateFunction(textData));
                }
                if (!response.ok) {
                    console.log(JSON.stringify(data) || `HTTP error ${response.status}. url: ${url}.`);
                }
            } catch (err) {
                console.log(`Fetch error: ${err}. url: ${url}.`);
                setError(err);
            } finally {
                setLoading(false);
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
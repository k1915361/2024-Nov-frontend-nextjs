'use client'

import { API_DATASET_ROOT, API_HTTP } from "@/app/login/fetchData";
import { useEffect, useRef, useState } from "react";

export function fetchAndSetState(api, setState, fetchInit={}) {
    async function f() {
        const response = await fetch(api, fetchInit)
        if (!response.ok) {
            console.log('Response not ok', response);
            return 
        }
        setState(response)
    }
    f();
}

/** @deprecated since 16.01.2025. Highly discouraged from using this function. */
export function useEffectFetchAndSetState(apiRoute, setText, apiRoot=API_DATASET_ROOT, apiSeparator = '/', fetchAndSetState_=fetchAndSetState) {
    useEffect(() => {
        fetchAndSetState_(
            `${apiRoot}${apiSeparator}${apiRoute}`, 
            setText
        )
    }, [])
}

/** Tested and verified compatibility on client side component.
 */
export function useFetchExperimental(
    apiRoute, 
    customSetStateFunction = (v) => v,
    apiRoot = API_HTTP, 
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

    if (error) {
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

export default function ViewTextFileClientSide({apiRoute, apiRoot=API_HTTP, apiSeparator = '/', ...props }) {
    const [text, setText] = useState('')
    
    useEffect(() => {
        fetchAndSetState(
            `${apiRoot}${apiSeparator}${apiRoute}`, 
            async (response) => setText((await response.text()).replace('<pre>', ' ').replace('</pre>', '')),
            {credentials: 'include'}
        )
    }, [])    
    
    return (
        <pre {...props} style={{ textWrap: "wrap"}} >
            {text}
        </pre>
    )
}
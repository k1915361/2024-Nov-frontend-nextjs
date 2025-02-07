'use client';

import { ListModelItemCard } from '@/app/home/list_models';
import { API_HTTP } from '@/app/login/fetchData';
import PageComponent from '@/app/pageComponent';
import { useState, useEffect } from 'react';

export const API_MODEL_SEARCH = `${API_HTTP}/model/search/?query=`

export function LiveSearchInput({value, handleChange, ...props}){
    return <input
            type="text"
            placeholder="Model Name"
            className='form-control mb-1'
            value={value}
            onChange={handleChange}
            required
            {...props}
        />
}

export default function LiveSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Debounce state to control API calls
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    // Debounce logic: Update `debouncedQuery` after 300ms
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300); // 300ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    // Fetch results whenever `debouncedQuery` changes
    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_MODEL_SEARCH}${debouncedQuery}`);
                const data = await response.json();

                setResults(data.list || []);
            } catch (error) {
                console.log('Error fetching search results:', error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    function setEventQuery(e) {
        setQuery(e.target.value)
    }

    return (
        <PageComponent>            
            <LiveSearchInput
                value={query}
                onChange={setEventQuery}
                placeholder="Search..."
            />
            {loading && <p>Loading...</p>}
            <ul className="search-results">
                {results.map((result, index) => (
                    <ListModelItemCard key={result.id} model={result}/>
                    // <li key={index}>{result.name}</li>
                ))}
            </ul>
        </PageComponent>
    );
}

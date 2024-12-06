'use client';

import { useState, useEffect } from 'react';

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
                const response = await fetch(`/api/search?query=${debouncedQuery}`);
                const data = await response.json();
                setResults(data.results || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="search-input"
            />
            {loading && <p>Loading...</p>}
            <ul className="search-results">
                {results.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

import { API_ROOT } from "../homepage/list_models";

export const fetchData = async (
    route
    , options
    , method = 'GET'
    ) => {
    const token = localStorage.getItem('access_token');

    if (!token) {
        throw new Error("No token found, please log in");        
    }

    const response = await fetch(`${API_ROOT}/${route}`, {
        method: method,
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch protected data")
    }
        
    return response.json();
};
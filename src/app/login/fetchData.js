import { API_ROOT } from "../homepage/list_models";

export const fetchData = async (
    route
    , options
    , method = 'GET'
) => {
    
    try {
        const response = await fetch(`${API_ROOT}${route}`, {
            method: method,
            ...options,
            headers: {
                ...options.headers,
                'Content-Type': 'application/json',
            },
            credentials: "include",
        });

        if (!response.ok) {
            console.log("Failed to fetch protected data")
            return "Fetch Failed. Response not ok"
        }
        const result = await response.json()
        return result;

    } catch (error) {
        console.error('Error:', error);
        return "Fetch Error"
    }
    return null
};
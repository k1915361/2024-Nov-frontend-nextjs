export const API_ROOT = "http://127.0.0.1:8000"
export const API_VIEW = API_ROOT + "/polls"
export const API = API_ROOT + "/api"

export const fetchData = async (
    route
    , options
    , method = 'GET'
) => {   
    try {
        const response = await fetch(`${API_ROOT}${route}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },            
            credentials: 'include',
            ...options,
        });
        if (!response.ok) {
            return response
        }
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
    return null
};
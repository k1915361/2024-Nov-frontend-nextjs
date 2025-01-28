export const API_ROOT = "127.0.0.1:8000"
export const API_ROOT_HTTP = "http://" + API_ROOT
export const HTTP_STATIC_SERVER = API_ROOT_HTTP + "/static"
export const API_VIEW = API_ROOT_HTTP + "/polls"
export const API_HTTP = API_ROOT_HTTP + "/api"
export const API = API_ROOT + "/api"
export const API_ROOT_WEBSOCKET = "ws://" + API

export const API_DATASET_ROOT = `${API_HTTP}/asset/user/dataset`;
export const API_MODEL_ROOT = `${API_HTTP}/asset/user/model`;

export const fetchData = async (
    route
    , options
    , method = 'GET'
    , apiRoot = API_ROOT_HTTP
) => { 
    try {
        const response = await fetch(`${apiRoot}${route}`, {
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
};

export const fetchResponse = async (
    route
    , options
    , method = 'GET'
    , apiRoot = API_ROOT_HTTP
) => {
    console.log(`${apiRoot}${route}`)
    try {
        const response = await fetch(`${apiRoot}${route}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },            
            credentials: 'include',
            ...options,
        });
        return response

    } catch (error) {
        return error
    }
}

export const fetchResponseObjectParameter = async (
    route,
    config = { options: {}, method: 'GET', apiRoot: API_ROOT_HTTP }
) => {
    const { options, method, apiRoot } = config;
    return fetchResponse(route, options, method, apiRoot)
}

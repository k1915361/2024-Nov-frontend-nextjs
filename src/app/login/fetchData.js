export const API_HOST_OLD = "127.0.0.1"
export const API_HOST = "localhost"
export const API_PORT = "8000"
export const API_ROOT = API_HOST + ":" + API_PORT
export const API_ROOT_HTTP = "http://" + API_ROOT
export const HTTP_STATIC_SERVER = API_ROOT_HTTP + "/static"
export const API_VIEW = API_ROOT_HTTP + "/polls"
export const API_HTTP = API_ROOT_HTTP + "/api"
export const API = API_ROOT + "/api"
export const API_ROOT_WEBSOCKET = "ws://" + API

export const API_DATASET_ROOT = `${API_HTTP}/asset/dataset`;
export const API_MODEL_ROOT = `${API_HTTP}/asset/model`;

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

/** Experimental fetchData function */
export const fetchData_ = async (
    route
    , options = {}
    , apiRoot = API_ROOT_HTTP
) => {
    try {
        const response = await fetch(`${apiRoot}${route}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            credentials: 'include',
            ...options,
        });
        if (!response.ok) {
            return {
                data: undefined,
                success: false,
                error: undefined,
                message: "Response not ok.",
                response: response,
            }
        }
        const data = await response.json()
        return {
            data: data,
            success: true,
            error: undefined,
            message: "",
            response: undefined,
        }

    } catch (error) {
        return { 
            data: undefined, 
            success: false,
            error: error, 
            message: "Error raised during fetch data.",
            response: undefined,
        }
    }
};

/** Pass undefined to keep default parameter values like f(r, undefined) */
export const sendJsonFetchResponse = async (
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
    return sendJsonFetchResponse(route, options, method, apiRoot)
}

export function isDataValid(data) {
    if (data && data != "Fetch Error" && data != "Fetch Failed. Response not ok") {
        return data
    }
    return false
}

export const API_HOST_OLD = "127.0.0.1"
export const API_HOST = "localhost"
export const API_PORT = "8000"
export const API_BASE_URL = `${API_HOST}:${API_PORT}`
export const API_PROTOCOL_HTTP = "http://"; 
export const API_PROTOCOL = "https://";
export const API_BASE_URL_WITH_PROTOCOL = API_PROTOCOL + API_BASE_URL
export const STATIC_URL = API_BASE_URL_WITH_PROTOCOL + "/static"
export const POLLS_API_URL = API_BASE_URL_WITH_PROTOCOL + "/polls"
export const API_ROOT = API_BASE_URL_WITH_PROTOCOL + "/api"
export const WEBSOCKET_PROTOCOL = "ws://"
export const WEBSOCKET_SECURE_PROTOCOL = "wss://"
export const WEBSOCKET_URL = WEBSOCKET_SECURE_PROTOCOL + API_BASE_URL + "/api"
export const API_WITH_ENDPOINT_EXAMPLE = `${API_ROOT}/top-datasets/`

export const DATASET_API_URL = `${API_ROOT}/asset/dataset`;
export const MODEL_API_URL = `${API_ROOT}/asset/model`;

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const PATCH = 'PATCH'
export const DELETE = 'DELETE'
export const OPTIONS = 'OPTIONS'

export const DEFAULT_3RD_PARTY_API_OPTIONS = {
    method: GET,
    headers: {
        'Content-Type': 'application/json',
    },
}

export const DEFAULT_TRUSTED_API_OPTIONS = {
    method: GET,
    headers: {
        'Content-Type': 'application/json',        
    },
    credentials: 'include',
}

export const fetchData = async (
    route
    , options
    , method = GET
    , apiRoot = API_BASE_URL_WITH_PROTOCOL
) => { 
    try {
        const response = await fetch(`${apiRoot}${route}`, 
            {
                ...DEFAULT_TRUSTED_API_OPTIONS,
                ...options,
            }
        );
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
    , apiRoot = API_BASE_URL_WITH_PROTOCOL
) => {
    try {
        const response = await fetch(`${apiRoot}${route}`, {
            ...DEFAULT_TRUSTED_API_OPTIONS,
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
    , method = GET
    , apiRoot = API_BASE_URL_WITH_PROTOCOL
) => {
    console.log(`${apiRoot}${route}`)
    try {
        const response = await fetch(`${apiRoot}${route}`, {
            ...DEFAULT_TRUSTED_API_OPTIONS,
            ...options,
        });
        return response
    } catch (error) {
        return error
    }
}

export const fetchResponseObjectParameter = async (
    route,
    config = { options: {}, method: GET, apiRoot: API_BASE_URL_WITH_PROTOCOL }
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

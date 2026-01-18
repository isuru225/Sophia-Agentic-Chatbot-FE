import axios from "axios";

const axiosInstance = {
    baseURL: "http://localhost:8000/",
    headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*"
    }

}

const sophiaHttp = {
    get: async (uniqueURL: string) => {
        return await axios.get(`${axiosInstance.baseURL}${uniqueURL}`,
            {
                withCredentials: true,
                headers: {
                    ...axiosInstance.headers
                }
            }
        )
    }
    ,
    getbyparams: async (uniqueURL: string, params: object) => {
        return await axios.get(`${axiosInstance.baseURL}${uniqueURL}`,
            {
                params: params,
                withCredentials: true,
                headers: {
                    ...axiosInstance.headers
                }
            }
        )
    }
    ,
    post: async (uniqueURL: string, data: any) => {
        return await axios.post(`${axiosInstance.baseURL}${uniqueURL}`, data,
            {
                withCredentials: true,
                headers: {
                    ...axiosInstance.headers
                }
            }
        )
    }
    ,
    delete: async (uniqueURL: string, id: any) => {
        return await axios.delete(`${axiosInstance.baseURL}${uniqueURL}/${id}`,
            {
                withCredentials: true,
                headers: {
                    ...axiosInstance.headers
                }
            }
        )
    }
    ,
    put: async (uniqueURL: string, id: any, data: any) => {
        return await axios.put(`${axiosInstance.baseURL}${uniqueURL}/${id}`, data,
            {
                withCredentials: true,
                headers: {
                    ...axiosInstance.headers
                }
            }
        )
    }
}

export default sophiaHttp;
import { OAuth } from "../Constants/Actions/OAuth.ts"

const
    {
        GET_AUTHORIZATION_URL,
        GET_AUTHORIZATION_URL_SUCCESS,
        GET_AUTHORIZATION_URL_FAIL,
        SET_AUTHORIZATION_CODE,
        SET_AUTHORIZATION_CODE_SUCCESS,
        SET_AUTHORIZATION_CODE_FAIL
    } = OAuth


export const OAuthActions = {
    authURL: {
        get: (data: any) => ({

            type: GET_AUTHORIZATION_URL,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: GET_AUTHORIZATION_URL_SUCCESS,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: GET_AUTHORIZATION_URL_FAIL,
            payload: {
                error,
                isLoading: false,
            },
        })

    }
    ,
    authCode : {
        set: (data: any) => ({

            type: SET_AUTHORIZATION_CODE,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: SET_AUTHORIZATION_CODE_SUCCESS,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: SET_AUTHORIZATION_CODE_FAIL,
            payload: {
                error,
                isLoading: false,
            },
        })
    }
}
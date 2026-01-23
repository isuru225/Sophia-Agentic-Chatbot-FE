
import { OAuth } from "../../actions/Constants/Actions/OAuth.ts";
import { OAuthInitState } from "./States/InitState.ts";


export const OAuthReducer = (state = OAuthInitState, action: any) => {
    switch (action.type) {
        case OAuth.GET_AUTHORIZATION_URL:
            return {
                ...state,
                authURL:{
                    ...state.authURL,
                    isLoading : action.payload.isLoading
                }
            }
        case OAuth.GET_AUTHORIZATION_URL_SUCCESS:
            return { 
                ...state,         
                authURL:{
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case OAuth.GET_AUTHORIZATION_URL_FAIL:
            return {
                ...state,
                authURL:{
                    ...state.authURL,
                    isLoading : action.payload.isLoading
                }
            }
        case OAuth.SET_AUTHORIZATION_CODE:
            return {
                ...state,
                authCode:{
                    ...state.authCode,
                    isLoading : action.payload.isLoading
                }
            }
        case OAuth.SET_AUTHORIZATION_CODE_SUCCESS:
            return { 
                ...state,         
                authCode:{
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case OAuth.SET_AUTHORIZATION_CODE_FAIL:
            return {
                ...state,
                authCode:{
                    ...state.authCode,
                    isLoading : action.payload.isLoading
                }
            }
        default:
            return state;
    }
}
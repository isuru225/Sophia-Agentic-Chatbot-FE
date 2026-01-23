
import { Home } from "../../actions/Constants/Actions/Home.ts";
import { HomeInitState } from "./States/InitState.ts";


export const HomeReducer = (state = HomeInitState, action: any) => {
    switch (action.type) {
        case Home.SET_USER_QUERY:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case Home.SET_USER_QUERY_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: action.payload.isLoading,
            }
        case Home.SET_USER_QUERY_FAIL:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }
        case Home.GET_USER_LOGIN_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.GET_USER_LOGIN_INFO_SUCCESS:
            return {
                ...state,
                user: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.GET_USER_LOGIN_INFO_FAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.SET_CONVERSATION_IDENTIFIER:
            return {
                ...state,
                conversationIdentifier: {
                    ...state.user,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.SET_CONVERSATION_IDENTIFIER_SUCCESS:
            return {
                ...state,
                conversationIdentifier: {
                    data: action.payload.data,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.SET_CONVERSATION_IDENTIFIER_FAIL:
            return {
                ...state,
                conversationIdentifier: {
                    ...state.user,
                    isLoading: action.payload.isLoading
                }
            }
        case Home.SET_INITIAL_QUERY:
            return {
                ...state,
                initialUserQuery: action.payload.data
            }
        default:
            return state;
    }
}
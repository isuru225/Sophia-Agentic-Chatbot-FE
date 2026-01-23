
import { ChatWindow } from "../../actions/Constants/Actions/ChatWindow.ts";
import { ChatWindowInitState } from "./States/InitState.ts";


export const ChatWindowReducer = (state = ChatWindowInitState, action: any) => {
    switch (action.type) {
        case ChatWindow.GET_ALL_CHAT_MESSAGES:
            return {
                ...state,
                messages:{
                    ...state.messages,
                    isLoading : action.payload.isLoading
                }
            }
        case ChatWindow.GET_ALL_CHAT_MESSAGES_SUCCESS:
            return { 
                ...state,         
                messages:{
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case ChatWindow.GET_ALL_CHAT_MESSAGES_FAIL:
            return {
                ...state,
                messages:{
                    ...state.messages,
                    isLoading : action.payload.isLoading
                }
            }
        case ChatWindow.GET_USER_QUERY_RESPONSE_CHAT_WINDOW:
            return {
                ...state,
                queryResponse:{
                    ...state.queryResponse,
                    isLoading : action.payload.isLoading
                }
            }
        case ChatWindow.GET_USER_QUERY_RESPONSE_SUCCESS_CHAT_WINDOW:
            return { 
                ...state,         
                queryResponse:{
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case ChatWindow.GET_USER_QUERY_RESPONSE_FAIL_CHAT_WINDOW:
            return {
                ...state,
                queryResponse:{
                    ...state.queryResponse,
                    isLoading : action.payload.isLoading
                }
            }
        
        default:
            return state;
    }
}
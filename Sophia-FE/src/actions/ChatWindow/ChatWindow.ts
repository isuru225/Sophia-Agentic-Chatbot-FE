import { ChatWindow } from "../Constants/Actions/ChatWindow.ts"

const
    {
        GET_ALL_CHAT_MESSAGES,
        GET_ALL_CHAT_MESSAGES_SUCCESS,
        GET_ALL_CHAT_MESSAGES_FAIL,
        GET_USER_QUERY_RESPONSE_CHAT_WINDOW,
        GET_USER_QUERY_RESPONSE_SUCCESS_CHAT_WINDOW,
        GET_USER_QUERY_RESPONSE_FAIL_CHAT_WINDOW

    } = ChatWindow


export const ChatWindowActions = {
    chatMessages: {
        get: (data: any) => ({

            type: GET_ALL_CHAT_MESSAGES,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: GET_ALL_CHAT_MESSAGES_SUCCESS,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: GET_ALL_CHAT_MESSAGES_FAIL,
            payload: {
                error,
                isLoading: false,
            },
        })

    }
    ,
    userQueryResponse: {

        set: (data: any) => ({

            type: GET_USER_QUERY_RESPONSE_CHAT_WINDOW,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: GET_USER_QUERY_RESPONSE_SUCCESS_CHAT_WINDOW,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: GET_USER_QUERY_RESPONSE_FAIL_CHAT_WINDOW,
            payload: {
                error,
                isLoading: false,
            },
        })

    }
}
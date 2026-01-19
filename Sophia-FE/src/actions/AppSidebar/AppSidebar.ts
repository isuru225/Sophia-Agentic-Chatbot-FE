import { AppSidebar } from "../Constants/Actions/AppSidebar.ts"

const
    {
        GET_CONVERSATION_LIST_BY_USER,
        GET_CONVERSATION_LIST_BY_USER_SUCCESS,
        GET_CONVERSATION_LIST_BY_USER_FAIL,

    } = AppSidebar


export const AppSidebarActions = {
    conversationList: {
        get: (data: any) => ({

            type: GET_CONVERSATION_LIST_BY_USER,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: GET_CONVERSATION_LIST_BY_USER_SUCCESS,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: GET_CONVERSATION_LIST_BY_USER_FAIL,
            payload: {
                error,
                isLoading: false,
            },
        })

    }
}
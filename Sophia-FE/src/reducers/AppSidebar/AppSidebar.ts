
import { AppSidebar } from "../../actions/Constants/Actions/AppSidebar.ts";
import { AppSidebarInitState } from "./States/InitState.ts";


export const AppSidebarReducer = (state = AppSidebarInitState, action: any) => {
    console.log("pannda", action);
    switch (action.type) {
        case AppSidebar.GET_CONVERSATION_LIST_BY_USER:
            return {
                ...state,
                conversationList:{
                    ...state.conversationList,
                    isLoading : action.payload.isLoading
                }
            }
        case AppSidebar.GET_CONVERSATION_LIST_BY_USER_SUCCESS:
            return { 
                ...state,         
                conversationList:{
                    data : action.payload.data,
                    isLoading : action.payload.isLoading
                }
            }
        case AppSidebar.GET_CONVERSATION_LIST_BY_USER_FAIL:
            return {
                ...state,
                conversationList:{
                    ...state.conversationList,
                    isLoading : action.payload.isLoading
                }
            }
        default:
            return state;
    }
}
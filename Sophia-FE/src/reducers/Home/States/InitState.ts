import { HomeInterface } from "../Interfaces/HomeInterface";

export const HomeInitState : HomeInterface= {
    data : {},
    isLoading : false,
    user : {
        data : {},
        isLoading : false
    }
    ,
    conversationIdentifier : {
        data : {},
        isLoading : false
    }
    ,
    initialUserQuery : {
        isInitialResponse : false,
        data : ""
    }
}
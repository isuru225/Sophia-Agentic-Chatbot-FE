export interface HomeInterface {
    data : object,
    isLoading : boolean,
    user : {
        data : object,
        isLoading : boolean
    },
    conversationIdentifier : {
        data : object,
        isLoading : boolean
    },
    initialUserQuery : {
        isInitialResponse : boolean,
        data : string
    }
}
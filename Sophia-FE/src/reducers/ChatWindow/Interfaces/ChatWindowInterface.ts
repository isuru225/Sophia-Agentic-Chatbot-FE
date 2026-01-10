export interface ChatWindowInterface {
    messages : {
        data : Array<object>,
        isLoading : boolean
    }
    ,
    queryResponse : {
        data : IQueryResponseData,
        isLoading : boolean

    }
}

interface IQueryResponseData {
    user_query_content : string
    chatbot_response_content : IChatBotResponse
}

interface IChatBotResponse{
    type : string,
    data : any
}
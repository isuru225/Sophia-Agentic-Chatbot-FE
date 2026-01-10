import { ChatWindowInterface } from "../Interfaces/ChatWindowInterface";

export const ChatWindowInitState: ChatWindowInterface = {
    messages: {
        data: [],
        isLoading: false
    },
    queryResponse: {
        data: {
            user_query_content: "",
            chatbot_response_content : {
                type : "",
                data : ""
            }
        },
        isLoading: true

    }
}
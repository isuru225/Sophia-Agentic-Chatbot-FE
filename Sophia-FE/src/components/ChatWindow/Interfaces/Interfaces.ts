export interface IChatMessage 
{
    user_query_content: string,
    conversation_id: string,
    meta: object
}

export interface IResponse
{
    user_query_content: string,
    chatbot_response_content: IChatBotResponse
}

interface IChatBotResponseFormat
{
    data : string,
    type : string
}

// Represents a single block inside a tool message
export interface IToolContent {
  type: "text";        // extensible later: "table" | "json"
  text: string;
}

// Represents a tool message
export interface IToolMessage {
  content: IToolContent[];
}

// Represents the final AI response
export interface IFinalAIMessage {
  content: string;
}

// Full response sent from backend
export interface IChatBotResponse {
  tool_messages: IToolMessage[];
  final_ai_message: IFinalAIMessage;
}

import React, { useEffect, useState, useRef } from 'react'
import { Card, Button, Col, Row, Timeline, Input, Avatar, Flex } from 'antd';
import { Sender, Actions, Bubble } from '@ant-design/x';
import { connect, ConnectedProps } from 'react-redux';
import { ChatWindowActions } from '../../actions/ChatWindow/ChatWindow.ts';
import { useNavigate } from 'react-router-dom';
import { FileImageOutlined, TaobaoOutlined, TagsOutlined, CopyOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';
import { chatBubbleHandler } from './Functions/Functions.tsx';
import { IChatMessage } from './Interfaces/Interfaces.ts';

type props = PropsFromRedux;
type SearchProps = GetProps<typeof Input.Search>;

const ChatWindow: React.FC<props> = (props) => {

    const { messages, getChatMessages, getChatResponse, queryResponse } = props ?? {};
    const [userQuery, setUserQuery] = useState('');
    const [chatList, setChatList] = useState<(JSX.Element | undefined)[]>([]);


    const { Search } = Input;
    const navigate = useNavigate();

    console.log("MAN", messages);

    const actionItems = [
        {
            key: 'retry',
            icon: <RedoOutlined />,
            label: 'Retry',
        },
        {
            key: 'copy',
            icon: <CopyOutlined />,
            label: 'Copy',
        },
    ];


    //get all available projects
    // useEffect(() => {
    //     const encodedValue = localStorage.getItem('token');
    //     if (encodedValue !== null) {
    //         getAllProjects({});
    //     } else {
    //         navigate('/login');
    //     }

    // }, [])


    const addChatPairHandler = () => {
        const chatPairJSX = [];
        chatPairJSX.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        content={userQuery}
                        header="You"
                        avatar={<Avatar icon={<UserOutlined />} />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )

        console.log("Naya", queryResponse?.isLoading);
        chatPairJSX.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        loading={queryResponse?.isLoading}
                        content={queryResponse?.data.chatbot_response_content.data}
                        placement="end"
                        header="Sophia"
                        avatar={<img className={"sophia-chat-bubble-icon"} src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )

        setChatList([...chatList, ...chatPairJSX])
    }

    const getQueryResponseHandler = () => {

        addChatPairHandler();

        const chatMessage: IChatMessage = {
            user_query_content: userQuery,
            conversation_id: "6f1e8c1a-9a8b-4c5d-b1a7-3a7f9e4a9d5e",
            meta: { source: "docs" }
        }

        getChatResponse(chatMessage)

        setUserQuery("");

    }



    useEffect(() => {
        getChatMessages({
            conversationId: "6f1e8c1a-9a8b-4c5d-b1a7-3a7f9e4a9d5e"
        });
    }, [])

    useEffect(() => {
        setChatList(chatBubbleHandler(messages?.data))
    }, [messages])

    //update the last item of the array
    useEffect(() => {
        const modifiedChatList = chatList.slice(0, -1);
        modifiedChatList.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        loading={false}
                        content={queryResponse?.chatbot_response_content?.final_ai_message?.content}
                        placement="end"
                        header="Sophia"
                        avatar={<img className={"sophia-chat-bubble-icon"} src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )
        setChatList(modifiedChatList)
    }, [queryResponse?.data])

    console.log("JJK", messages?.data)

    return (
        <>

            <br />
            <div className="chat-page">
                <Flex vertical gap="small">
                    {chatList}
                </Flex>
                <br />
                <div className="chat-sender">
                    <Sender
                        className="chat-sender"
                        loading={false}
                        value={userQuery}
                        placeholder="Ask anything"
                        onChange={(v) => {
                            setUserQuery(v);
                        }}
                        onSubmit={getQueryResponseHandler}
                        onCancel={() => {
                            //setLoading(false);
                            //message.error('Cancel sending!');
                        }}
                        autoSize={{ minRows: 2, maxRows: 4 }}
                    />
                </div>
                <br />
            </div>

            <br />
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { ChatWindowReducer } = state;
    const { messages, queryResponse } = ChatWindowReducer;

    return {
        messages,
        queryResponse
    };
}

const mapDispatchToProps = {
    getChatMessages: ChatWindowActions.chatMessages.get,
    getChatResponse: ChatWindowActions.userQueryResponse.set
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(ChatWindow);


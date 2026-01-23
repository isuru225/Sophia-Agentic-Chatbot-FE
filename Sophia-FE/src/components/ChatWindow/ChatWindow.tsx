import React, { useEffect, useState, useRef } from 'react'
import { Input, Avatar, Flex, Skeleton } from 'antd';
import { Sender, Actions, Bubble } from '@ant-design/x';
import { connect, ConnectedProps } from 'react-redux';
import { ChatWindowActions } from '../../actions/ChatWindow/ChatWindow.ts';
import { useNavigate } from 'react-router-dom';
import { CopyOutlined, RedoOutlined, UserOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';
import { chatBubbleHandler } from './Functions/Functions.tsx';
import { IChatMessage } from './Interfaces/Interfaces.ts';
import { useSearchParams } from 'react-router-dom';
import { HomeActions } from '../../actions/Home/Home.ts';

type props = PropsFromRedux;
type SearchProps = GetProps<typeof Input.Search>;

const ChatWindow: React.FC<props> = (props) => {

    const {
        messages,
        getChatMessages,
        getChatResponse,
        queryResponse,
        conversationIdentifier,
        initialUserQuery,
        setInitialQuery
    } = props ?? {};

    const [userQuery, setUserQuery] = useState('');
    const [chatList, setChatList] = useState<(JSX.Element | undefined)[]>([]);

    const { Search } = Input;
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isInitialRender = useRef(true);

    const conversationId = searchParams.get('conversationId')

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

    const addChatPairHandler = (contentValue: string) => {
        const chatPairJSX = [];
        chatPairJSX.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        className='chat-bubble'
                        content={contentValue}
                        header="You"
                        avatar={<Avatar icon={<UserOutlined />} />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )

        chatPairJSX.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        className='chat-bubble'
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

        let chatMessage: IChatMessage;

        if (initialUserQuery?.isInitialResponse) {
            addChatPairHandler(initialUserQuery?.data);
            chatMessage = {
                user_query_content: initialUserQuery?.data,
                conversation_id: conversationId,
                meta: { source: "docs" }
            }

            setInitialQuery({
                isInitialResponse: false,
                data: ""
            })
        }
        else {
            addChatPairHandler(userQuery)
            chatMessage = {
                user_query_content: userQuery,
                conversation_id: conversationId,
                meta: { source: "docs" }
            }
        }

        getChatResponse(chatMessage)

        setUserQuery("");

    }

    useEffect(() => {
        if (initialUserQuery?.isInitialResponse) {
            getQueryResponseHandler()
        } else {
            getChatMessages({
                conversationId: conversationId
            });
        }
    }, [])

    useEffect(() => {
        if (!initialUserQuery?.isInitialResponse) {
            setChatList(chatBubbleHandler(messages?.data))
        }
    }, [messages])

    //update the last item of the array
    useEffect(() => {

        if (!isInitialRender.current) {
            const modifiedChatList = chatList.slice(0, -1);
            modifiedChatList.push(
                <Flex gap="small" wrap>
                    <div style={{ width: '100%' }}>
                        <Bubble className="chat-bubble"
                            loading={false}
                            content={queryResponse?.data.chatbot_response_content?.tool_messages?.length > 0 ? queryResponse?.data.chatbot_response_content?.tool_messages[0].content[0].text : queryResponse?.data.chatbot_response_content?.final_ai_message.content
                            }
                            placement="end"
                            header="Sophia"
                            avatar={<img className={"sophia-chat-bubble-icon"} src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />}
                            footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                        />
                    </div>
                </Flex>
            )
            setChatList(modifiedChatList)
        }

        isInitialRender.current = false;

    }, [queryResponse?.data])

    return (
        <>
            <Skeleton loading={conversationIdentifier?.isLoading} active>
                <br />
                <div className="chat-page">
                    <Flex vertical gap="small">
                        {chatList}
                    </Flex>
                    <br />
                    <div className="chat-footer">
                        <div className="chat-sender-wrapper">
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
                </div>
                <br />
            </Skeleton>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { ChatWindowReducer, HomeReducer } = state;
    const { messages, queryResponse } = ChatWindowReducer;
    const { conversationIdentifier, initialUserQuery } = HomeReducer;

    return {
        conversationIdentifier,
        messages,
        queryResponse,
        initialUserQuery
    };
}

const mapDispatchToProps = {
    getChatMessages: ChatWindowActions.chatMessages.get,
    getChatResponse: ChatWindowActions.userQueryResponse.set,
    setInitialQuery: HomeActions.initialQuery.set
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(ChatWindow);


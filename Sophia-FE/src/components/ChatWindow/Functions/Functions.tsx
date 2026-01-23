import React from 'react'
import { Avatar, Flex } from 'antd';
import { Actions, Bubble } from '@ant-design/x';
import { UserOutlined, RedoOutlined, CopyOutlined } from '@ant-design/icons';
import { IResponse } from '../Interfaces/Interfaces';


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

export const chatBubbleHandler = (messages: Array<IResponse>): (JSX.Element | undefined)[] => {
    const messageBuggles: JSX.Element[] = [];
    messages?.forEach((message: IResponse) => {
        messageBuggles.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        className='chat-bubble'
                        content={message.user_query_content}
                        header="You"
                        avatar={<Avatar icon={<UserOutlined />} />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )
        messageBuggles.push(
            <Flex gap="small" wrap>
                <div style={{ width: '100%' }}>
                    <Bubble
                        className='chat-bubble'
                        content={message.chatbot_response_content?.tool_messages.length > 0 ? message.chatbot_response_content?.tool_messages[0].content[0].text : message.chatbot_response_content?.final_ai_message.content}
                        placement="end"
                        header="Sophia"
                        avatar={<img className={"sophia-chat-bubble-icon"} src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />}
                        footer={(content) => <Actions items={actionItems} onClick={() => console.log(content)} />}
                    />
                </div>
            </Flex>
        )
    })

    return messageBuggles;
}
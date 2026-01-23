import React, { useEffect, useState, useRef } from 'react'
import { Card, Modal, Col, Row, message, Input } from 'antd';
import { Welcome } from "@ant-design/x";
import { connect, ConnectedProps } from 'react-redux';
import { HomeActions } from '../../actions/Home/Home.ts';
import { errorMessages, projectButtonColorCode } from "./Constants/Constants.ts";
import { getSelectedProject, JWTDecoder, techStackHandler, userValidationHandler } from './Functions/Functions.tsx';
import { IProject, IUser } from './Interfaces/Interface.ts';
import { useNavigate } from 'react-router-dom';
import { FileImageOutlined, TaobaoOutlined, TagsOutlined } from '@ant-design/icons';
import type { GetProps } from 'antd';
import { Color } from 'antd/es/color-picker/index';

type props = PropsFromRedux;
type SearchProps = GetProps<typeof Input.Search>;

const Home: React.FC<props> = (props) => {

    const {
        data,
        isLoading,
        setUserQuery,
        user,
        getUserLoginInfo,
        setConversationIdentifier,
        setInitialQuery,
        conversationIdentifier
    } = props ?? {};

    const [isProjectInfoVisible, setIsProjectInfoVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chatTitle, setChatTitle] = useState("");
    const [initialUserQuery, setInitialUserQuery] = useState("")
    const isChatTileCreatedAndSent = useRef(false)

    const { Search } = Input;
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setConversationIdentifier({
            content: chatTitle,
            user_id: user?.data?.loginInfo.id
        })
        setIsModalOpen(false);
        setInitialQuery({
            isInitialResponse: true,
            data: initialUserQuery
        });

        isChatTileCreatedAndSent.current = true

    };

    useEffect(() => {
        if (isChatTileCreatedAndSent.current) {
            navigate(`/chatwindow?conversationId=${conversationIdentifier?.data?.id}`)
        }
    }, [conversationIdentifier?.data?.id])

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const initialSearchHandler: SearchProps['onSearch'] = (value, _e, info) => {
        if (!value || value.trim().length < 1 && value.trim().length > 20) {
            //message.error('Please enter a value in between 1 to 20');
            return;
        }
        setInitialUserQuery(value);
        showModal();
        //setUserQuery(value);

    }

    return (
        <>
            <Row justify="center">
                <Card className="feature-card" bordered={false}>
                    <div className="feature-icon"><img src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" /></div>
                    <h3 className="feature-title">Hi I'm Sophia. How Can I help You Today?</h3>
                    <p className="feature-desc">An intelligent agentic chatbot designed to understand your goals, reason through tasks, and take action across multiple steps.So you get results, not just responses.</p>
                    <Row>
                        <Col>
                            <Card className="sub-card" style={{ width: 190, height: 150, marginLeft: 10, marginRight: 10 }}>
                                <div className="sub-feature-icon"><TagsOutlined /></div>
                                <h3 className="sub-feature-title">Saved Prompt Templates</h3>
                                <p className="sub-feature-desc">User save and and reuse prompt templates for faster responses.</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="sub-card" style={{ width: 190, height: 150, marginLeft: 10, marginRight: 10 }}>
                                <div className="sub-feature-icon"><FileImageOutlined /></div>
                                <h3 className="sub-feature-title">Media Type Selection</h3>
                                <p className="sub-feature-desc">Users select media type for tailored interactions.</p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="sub-card" style={{ width: 190, height: 150, marginLeft: 10, marginRight: 10 }}>
                                <div className="sub-feature-icon"><TaobaoOutlined /></div>
                                <h3 className="sub-feature-title">Multilingual Support</h3>
                                <p className="sub-feature-desc">Choose language for better interaction.</p>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        type='success'
                        size="large"
                        //disabled={true}
                        prefix={<img className="chat-bot-icon" src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />}
                        onSearch={initialSearchHandler}
                    />
                </Card>
            </Row>
            <Modal
                title="Conversation Identifier"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>please enter and short conversation description for clarity.</p>
                <Input placeholder="Conversation Identifier..." onChange={(e) => { setChatTitle(e.target.value) }} value={chatTitle} />
            </Modal>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { HomeReducer } = state;
    const { data, isLoading, user, conversationIdentifier } = HomeReducer;

    return {
        data,
        isLoading,
        user,
        conversationIdentifier
    };
}

const mapDispatchToProps = {
    setUserQuery: HomeActions.userQuery.set,
    getUserLoginInfo: HomeActions.userLoginInfo.get,
    setConversationIdentifier: HomeActions.conversationIdentifier.set,
    setInitialQuery: HomeActions.initialQuery.set
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Home);


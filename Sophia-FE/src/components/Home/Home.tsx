import React, { useEffect, useState, useRef } from 'react'
import { Card, Modal, Col, Row, Timeline, Input } from 'antd';
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

    const { data, isLoading, setUserQuery, user, getUserLoginInfo } = props ?? {};

    const [isProjectInfoVisible, setIsProjectInfoVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<IProject>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { Search } = Input;
    const navigate = useNavigate();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const initialSearchHandler : SearchProps['onSearch'] = (value, _e, info) => {
        console.log(value);
        if(value !== null && value != undefined){

            showModal()
            setUserQuery(value);
            //navigate('/chatwindow');
        }
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
                    <Input placeholder="Conversation Identifier..."  />
                </Modal>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const { HomeReducer } = state;
    const { data, isLoading, user } = HomeReducer;

    return {
        data,
        isLoading,
        user
    };
}

const mapDispatchToProps = {
    setUserQuery: HomeActions.userQuery.set,
    getUserLoginInfo : HomeActions.userLoginInfo.get
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Home);


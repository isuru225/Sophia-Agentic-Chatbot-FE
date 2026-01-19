import React, { useEffect } from "react";
import { Button, Divider, Input, Typography, Row, Col } from "antd";
import {
  GoogleOutlined,
  FacebookFilled,
  WindowsFilled,
} from "@ant-design/icons"
import { connect, ConnectedProps } from 'react-redux';
const { Title, Text, Link } = Typography;
import { OAuthActions } from "../../actions/OAuth/OAuth.ts";

type props = PropsFromRedux;

const IdentityProviders: React.FC<props> = (props) => {

    const { getAuthURL, authURL } = props ?? {}

    const loginWithGoogle = () => {
        getAuthURL({})
    };

    const loginWithGithub = () => {
        //window.location.href = "http://localhost:5000/auth/github/login";
    };

    useEffect(() => {
        console.log("Savage", authURL)
        if (authURL?.data.auth_url != "" && authURL?.data.auth_url != undefined) {
            window.location.href = authURL?.data.auth_url
        }
    }, [authURL?.data])

    return (
        <div className="login-container shaded-bg">
            <Row className="login-card">
                {/* LEFT SIDE */}
                <Col xs={0} md={12} className="login-left">
                    <div className="ai-logo">
                        <img src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp" />
                        <h1>Sophia</h1>
                    </div>

                    <Title level={2}>Ready to supercharge your workflows with AI?</Title>
                    <Text className="subtitle">
                        Sophia is your intelligent agentic chatbot that understands context, takes action, and collaborates seamlessly with your systems all from one secure, centralized platform.
                    </Text>

                    <Button type="primary" size="large" className="company-btn">
                        Try Our New Company Plan
                    </Button>
                </Col>

                {/* RIGHT SIDE */}
                <Col xs={24} md={12} className="login-right">
                    <Title level={3}>Log In to Your Account</Title>

                    <Button
                        icon={<GoogleOutlined />}
                        block
                        size="large"
                        className="google-btn"
                        onClick={loginWithGoogle}
                    >
                        Continue with Google
                    </Button>

                    <Button
                        icon={<FacebookFilled />}
                        block
                        size="large"
                        className="facebook-btn"
                    >
                        Continue with Facebook
                    </Button>

                    <Button
                        icon={<WindowsFilled />}
                        block
                        size="large"
                        className="microsoft-btn"
                    >
                        Continue with Microsoft
                    </Button>

                    <Divider>OR</Divider>

                    <Input size="large" placeholder="Email" />

                    <Button block size="large" type="primary" className="continue-btn">
                        Continue
                    </Button>

                    <Text className="signup-text">
                        Don’t have an account? <Link>Sign Up</Link>
                    </Text>
                </Col>
            </Row>
        </div>
    );
};


const mapStateToProps = (state: any) => {
    const { OAuthReducer } = state;
    const { authURL } = OAuthReducer;

    return {
        authURL
    };
}

const mapDispatchToProps = {
    getAuthURL: OAuthActions.authURL.get
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(IdentityProviders);

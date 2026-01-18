import React, { useEffect } from "react";
import { Button, Divider } from "antd";
import {
    GoogleOutlined,
    GithubOutlined,
} from "@ant-design/icons";
import { connect, ConnectedProps } from 'react-redux';

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

    useEffect(()=>{
        console.log("Savage",authURL)
        if(authURL?.data.auth_url != "" && authURL?.data.auth_url != undefined){
            window.location.href = authURL?.data.auth_url
        }
    },[authURL?.data])

    return (
        <div style={styles.container}>
            <Button
                icon={<GoogleOutlined />}
                size="large"
                block
                onClick={loginWithGoogle}
                style={styles.googleBtn}
            >
                Continue with Google
            </Button>

            <Divider>OR</Divider>

            <Button
                icon={<GithubOutlined />}
                size="large"
                block
                onClick={loginWithGithub}
                style={styles.githubBtn}
            >
                Continue with GitHub
            </Button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: 360,
        margin: "auto",
    },
    googleBtn: {
        borderRadius: 6,
        fontWeight: 500,
    },
    githubBtn: {
        borderRadius: 6,
        background: "#24292e",
        color: "#fff",
        fontWeight: 500,
    },
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

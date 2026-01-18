import React, { useEffect } from 'react';
import { Alert, Flex, Spin } from 'antd';
import { connect, ConnectedProps } from 'react-redux'
import { OAuthActions } from '../../actions/OAuth/OAuth.ts';

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

type props = PropsFromRedux;

const CallBack: React.FC<props> = (props) => {

    const { setCallBack, authCode} = props ?? {};

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        setCallBack({
            code
        })
    }, [])

    return (
        < Flex gap="middle" vertical >
            {/* <Flex gap="middle">
            <Spin tip="Loading" size="small">
                {content}
            </Spin>
            <Spin tip="Loading">{content}</Spin>
            <Spin tip="Loading" size="large">
                {content}
            </Spin>
        </Flex> */}
            < Spin tip="Loading..." >
                {/* <Alert
                title="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            /> */}
            </Spin >
        </Flex >
    )

}

const mapStateToProps = (state: any) => {
    const { OAuthReducer } = state;
    const { authCode } = OAuthReducer;

    return {
        authCode
    };
}

const mapDispatchToProps = {
    setCallBack: OAuthActions.authCode.set
    
}


const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(CallBack);

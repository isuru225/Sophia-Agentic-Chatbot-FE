import React,{ useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { CNavItem } from '@coreui/react'
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'
import { AppSidebarActions } from '../actions/AppSidebar/AppSidebar.ts'

const AppSidebar = (props) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const { conversationList, getConversationList, loginInfo } = props ?? {}

  useEffect(()=>{
      console.log("Jaguar",loginInfo?.id)
      if(loginInfo?.id){
          getConversationList({
            userId : loginInfo?.id
          })
      }
  },[loginInfo?.id])

  console.log("Horse",conversationList?.data);


  // [
  //       {
  //         component: CNavItem,
  //         name: 'Gemini-2.0-flash',
  //         to: '/notifications/alerts',
  //       },
  //       {
  //         component: CNavItem,
  //         name: 'Gemini-2.0-flash-lite',
  //         to: '/notifications/badges',
  //       }
  //     ]
  const subItemArray = (chatList) => {
    
    const result = chatList?.map((chat)=>{
      return {
        component: CNavItem,
        name: chat?.title,
        href: `/#/chatwindow?conversationId=${chat?.id}`,
      }
    })
    console.log("HelloHello",result)
    return result
  }

  const sidebarItemHandler = (conversationList) => {
    navigation?.forEach((component)=>{
      if(component.id ==="conversation"){
        component.items = subItemArray(conversationList)
      }
    })

    return navigation
  }

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      visible={true}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/" style={{ textDecoration: "none" }}>
          <div className="brand-wrapper">
            <img
              className="chat-bot-banner-logo"
              src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
              alt="logo"
            />
            <h1>Sophia</h1>
          </div>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>

      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={sidebarItemHandler(conversationList?.data)} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

const mapStateToProps = (state) => {
  const { AppSidebarReducer, Lo } = state;
  const { conversationList } = AppSidebarReducer;

  return {
    conversationList
  };
}

const mapDispatchToProps = {
  getConversationList : AppSidebarActions.conversationList.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppSidebar);
//export default React.memo(AppSidebar)

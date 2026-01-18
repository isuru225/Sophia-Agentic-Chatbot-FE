import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContrast,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'
import { connect } from 'react-redux'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { JWTDecoder } from './Home/Functions/Functions.tsx'
import logo from "../assets/images/TN2.png"
import { LoginActions } from '../actions/Login/Login.ts'

const AppHeader = (props) => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const [userName, setUserName] = useState(null);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const navigate = useNavigate();
  const { getUserLoginInfo, user } = props ?? {}

  useEffect(() => {
    getUserLoginInfo({});
  }, [])

  console.log("HOLEEOLLEE",user?.data)

  useEffect(() => {

    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-1" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        {/* <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        > */}
        {/* <CIcon icon={cilMenu} size="lg" /> */}
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem >
            <CNavLink href="/" to="/dashboard" component={NavLink}>
              {/* <img src={logo} className="main-logo" /> */}
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* //</CHeaderToggler> */}
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink href="/" component={NavLink}>
              Home
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          {user.data?.loginInfo && <CNavItem>
            {`Hi ${user.data?.loginInfo.name}, Welcome to Sophia.`}
            </CNavItem>}
          {/* {userName && <CNavItem>
            <CNavLink>
              {`Hi ${}, Welcome to Task Nest.`}
            </CNavLink>
          </CNavItem>}
          {!userName && <CNavItem>
            <CNavLink href="#/login">Login</CNavLink>
          </CNavItem>} */}
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          {userName && <AppHeaderDropdown logoutHandler={() => { setUserName(null) }} />}
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}


const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  const { data, isLoading, user } = LoginReducer;

  return {
    data,
    isLoading,
    user
  };
}

const mapDispatchToProps = {
  getUserLoginInfo: LoginActions.userLoginInfo.get
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AppHeader);
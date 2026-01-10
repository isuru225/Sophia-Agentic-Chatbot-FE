import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cisLightbulb,
  cibCevo,
  cibWechat
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Tasks',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Completed',
  //   to: '/charts',
  //   icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'In Progress',
  //   to: '/charts',
  //   icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'To Do',
  //   to: '/charts',
  //   icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Team',
  //   to: '/charts',
  //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Trash',
  //   to: '/charts',
  //   icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: 'Models',
    icon: <CIcon icon={cibCevo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Gemini-2.0-flash',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Gemini-2.0-flash-lite',
        to: '/notifications/badges',
      }
    ],
  }
  ,
  {
    component: CNavGroup,
    name: 'Your chats',
    icon: <CIcon icon={cibWechat} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  }
]

export default _nav

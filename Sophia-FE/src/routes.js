import React from 'react'

const Login = React.lazy(()=> import('./pages/Login/Login.tsx'))
const Home = React.lazy(()=> import('./components/Home/Home.tsx'))
const ChatWindow = React.lazy(()=> import('./components/ChatWindow/ChatWindow.tsx'))
const CallBack = React.lazy(()=> import('./components/CallBack/CallBack.tsx'))

const routes = [
   { path: '/', exact: true, name: 'Home',element: Home},
   { path: '/login', name: 'Login',element: Login},
   { path: '/home', name: 'Home2', element: Home},
   { path: '/chatwindow', name: 'ChatWindow', element: ChatWindow },
   { path: '/api/auth/google/callback', name: 'CallBack', element: CallBack }
]

export default routes

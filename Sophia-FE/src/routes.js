import React from 'react'

const Home = React.lazy(()=> import('./views/home/Home'))
const Login = React.lazy(()=> import('./pages/Login/Login.tsx'))
const Home2 = React.lazy(()=> import('./components/Home/Home.tsx'))
const Dashboard = React.lazy(()=> import('./components/Dashboard/Dashboard.tsx'));
const Tasks = React.lazy(()=> import('./components/Tasks/Tasks.tsx'))
const ChatWindow = React.lazy(()=> import('./components/ChatWindow/ChatWindow.tsx'))
const CallBack = React.lazy(()=> import('./components/CallBack/CallBack.tsx'))

const routes = [
   { path: '/', exact: true, name: 'Home',element: Home},
   { path: '/login', name: 'Login',element: Login},
   { path: '/home', name: 'Home2', element: Home2},
   { path: '/dashboard', name: 'Dashboard', element: Dashboard },
   { path: '/project/tasks', name: 'Tasks', element: Tasks },
   { path: '/chatwindow', name: 'ChatWindow', element: ChatWindow },
   { path: '/api/auth/google/callback', name: 'CallBack', element: CallBack }
]

export default routes

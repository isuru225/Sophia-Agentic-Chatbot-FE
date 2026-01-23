import React,{useEffect} from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
//import AppFooter from '../components/LayoutComponents/AppFooter/AppFooter.tsx'
import { LoginActions } from '../actions/Login/Login.ts'
import { connect } from 'react-redux'
import { use } from 'react'

const DefaultLayout = (props) => {

  const { getUserLoginInfo, user } = props ?? {}

  useEffect(()=>{
    getUserLoginInfo({})
  },[])

  return (
    <div>
      <AppSidebar loginInfo = {user?.data?.loginInfo} className="app-sidebar"/>
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader user={user} className="app-header"/>
        <div className="body flex-grow-1 app-content">
          <AppContent user={user}/>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
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

export default connector(DefaultLayout);
// export default DefaultLayout

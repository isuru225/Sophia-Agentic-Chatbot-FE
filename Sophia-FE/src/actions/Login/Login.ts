import { Login } from "../Constants/Actions/Login.ts"

const
  {
    LOG_USER_CREDNTIALS,
    LOG_USER_CREDNTIALS_SUCCESS,
    LOG_USER_CREDNTIALS_FAIL,
    LOG_OUT_USER,
    GET_USER_LOGIN_INFO,
    GET_USER_LOGIN_INFO_SUCCESS,
    GET_USER_LOGIN_INFO_FAIL

  } = Login


export const LoginActions = {
  userCredentials: {
    log: (data: any) => ({

      type: LOG_USER_CREDNTIALS,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: LOG_USER_CREDNTIALS_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: LOG_USER_CREDNTIALS_FAIL,
      payload: {
        error,
        isLoading: false,
      },
    })

  }
  ,
  userLoginInfo: {
    get: (data: any) => (
      {
        type: GET_USER_LOGIN_INFO,
        payload: {
          data,
          isLoading: true
        },
      }
    ),
    success: (data: any) => ({
      type: GET_USER_LOGIN_INFO_SUCCESS,
      payload: {
        data,
        isLoading: false
      },
    }),
    fail: (data: any) => ({
      type: GET_USER_LOGIN_INFO_FAIL,
      payload: {
        data,
        isLoading: false,
      },
    })
  }
  ,
  userlogout: {
    logout: (data: any) => ({
      type: LOG_OUT_USER,
      payload: {
        data,
        isLoading: false
      }
    })
  }
}
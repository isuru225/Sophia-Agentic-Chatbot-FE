import { Home } from "../Constants/Actions/Home.ts"

const
  {
    SET_INIT_USER_QUERY,
    SET_USER_QUERY,
    SET_USER_QUERY_SUCCESS,
    SET_USER_QUERY_FAIL,
    GET_USER_LOGIN_INFO,
    GET_USER_LOGIN_INFO_SUCCESS,
    GET_USER_LOGIN_INFO_FAIL

  } = Home


export const HomeActions = {
  userQuery: {
    setInit: (data: any) => (
      {

        type: SET_INIT_USER_QUERY,
        payload: {
          data,
          isLoading: true
        },
      }
    ),
    set: (data: any) => ({

      type: SET_USER_QUERY,
      payload: {
        data,
        isLoading: true
      },
    }),
    success: (data: any) => ({
      type: SET_USER_QUERY_SUCCESS,
      payload: {
        data,
        isLoading: false,
      },
    }),
    fail: (error: any) => ({
      type: SET_USER_QUERY_FAIL,
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
        isLoading: true
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
}
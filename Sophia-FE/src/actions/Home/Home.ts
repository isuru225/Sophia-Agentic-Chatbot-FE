import { Home } from "../Constants/Actions/Home.ts"

const
  {
    SET_INIT_USER_QUERY,
    SET_USER_QUERY,
    SET_USER_QUERY_SUCCESS,
    SET_USER_QUERY_FAIL,
    GET_USER_LOGIN_INFO,
    GET_USER_LOGIN_INFO_SUCCESS,
    GET_USER_LOGIN_INFO_FAIL,
    SET_CONVERSATION_IDENTIFIER,
    SET_CONVERSATION_IDENTIFIER_SUCCESS,
    SET_CONVERSATION_IDENTIFIER_FAIL,
    SET_INITIAL_QUERY

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
  conversationIdentifier: {
    set: (data: any) => (
      {
        type: SET_CONVERSATION_IDENTIFIER,
        payload: {
          data,
          isLoading: true
        },
      }
    ),
    success: (data: any) => ({
      type: SET_CONVERSATION_IDENTIFIER_SUCCESS,
      payload: {
        data,
        isLoading: false
      },
    }),
    fail: (data: any) => ({
      type: SET_CONVERSATION_IDENTIFIER_FAIL,
      payload: {
        data,
        isLoading: false,
      },
    })
  }
  ,
  initialQuery: {
    set: (data: any) => (
      {
        type: SET_INITIAL_QUERY,
        payload: {
          data,
          isLoading: true
        },
      }
    )
  }
}
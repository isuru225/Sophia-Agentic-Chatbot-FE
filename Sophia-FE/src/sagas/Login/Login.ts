import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Login } from "../../actions/Constants/Actions/Login.ts";
import { LoginService } from "../../services/Login/index.ts";
import { LoginActions } from "../../actions/Login/Login.ts";

export const LoginSagas = {
  userCredentials: {
    log: function* (action: any) {

      try {
        const { data, status } = yield call(
          LoginService.logUserCredentials, action.payload.data
        );
        if (status == 200) {
          yield put(
            LoginActions.userCredentials.success(data)
          )
        }

      } catch (error) {
        yield put(
          LoginActions.userCredentials.fail(error.response.data?.errorCode)
        );
      }
    },
  }
  ,
  userLoginInfo: {
    get: function* (action: any) {
      try {
        const { data, status } = yield call(
          LoginService.getUserLoginInfo, action.payload.data
        );
        if (status == 200) {
          yield put(
            LoginActions.userLoginInfo.success(data)
          )
        }

      } catch (error) {
        yield put(
          LoginActions.userLoginInfo.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
  takeLatest(
    Login.LOG_USER_CREDNTIALS,
    LoginSagas.userCredentials.log
  ),
  takeLatest(
    Login.GET_USER_LOGIN_INFO,
    LoginSagas.userLoginInfo.get
  )
]
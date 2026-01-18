import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { OAuth } from "../../actions/Constants/Actions/OAuth.ts";
import { OAuthActions } from "../../actions/OAuth/OAuth.ts";
import { OAuthService } from "../../services/OAuth/index.ts";

export const OAuthSagas = {
  authURL : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
          OAuthService.getAuthURL , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            OAuthActions.authURL.success(data)
          )
        }

      } catch (error) {
        yield put(
            OAuthActions.authURL.fail(error.response.data?.errorCode)
        );
      }
    } 
  }
  ,
  authCode : {
    set : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
          OAuthService.setAuthCode , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            OAuthActions.authCode.success(data)
          )
        }

      } catch (error) {
        yield put(
            OAuthActions.authCode.fail(error.response.data?.errorCode)
        );
      }
    } 
  }
}

export default [
    takeLatest(
      OAuth.GET_AUTHORIZATION_URL,
      OAuthSagas.authURL.get
    ),
    takeLatest(
      OAuth.SET_AUTHORIZATION_CODE,
      OAuthSagas.authCode.set
    )
  ]
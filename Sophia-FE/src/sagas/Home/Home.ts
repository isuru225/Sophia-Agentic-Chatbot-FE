import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { Home } from "../../actions/Constants/Actions/Home.ts";
import { HomeActions } from "../../actions/Home/Home.ts";
import { HomeService } from "../../services/Home/index.ts";

export const HomeSagas = {
  userQuery : {
    set : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
          HomeService.setUserQuery , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            HomeActions.userQuery.success(data)
          )
        }

      } catch (error) {
        yield put(
            HomeActions.userQuery.fail(error.response.data?.errorCode)
        );
      }
    },
  }
}

export default [
    takeLatest(
      Home.SET_USER_QUERY,
      HomeSagas.userQuery.set
    )
  ]
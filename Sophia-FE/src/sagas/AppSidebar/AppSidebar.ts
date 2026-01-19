import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { AppSidebar } from "../../actions/Constants/Actions/AppSidebar.ts";
import { AppSidebarActions } from "../../actions/AppSidebar/AppSidebar.ts";
import { AppSidebarService } from "../../services/AppSidebar/index.ts";

export const AppSidebarSagas = {
  conversationList : {
    get : function* (action: any) {
      console.log("raven");
      try {
        const { data, status } = yield call(
          AppSidebarService.getAllConversationList , action.payload.data
        );
        if (status == 200) {
          console.log("light234",data);
          yield put(
            AppSidebarActions.conversationList.success(data)
          )
        }

      } catch (error) {
        yield put(
            AppSidebarActions.conversationList.fail(error.response.data?.errorCode)
        );
      }
    } 
  }
}

export default [
    takeLatest(
      AppSidebar.GET_CONVERSATION_LIST_BY_USER,
      AppSidebarSagas.conversationList.get
    )
  ]
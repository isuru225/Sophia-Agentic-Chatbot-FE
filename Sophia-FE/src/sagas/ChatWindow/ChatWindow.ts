import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { ChatWindow } from "../../actions/Constants/Actions/ChatWindow.ts";
import { ChatWindowActions } from "../../actions/ChatWindow/ChatWindow.ts";
import { ChatWindowService } from "../../services/ChatWindow/index.ts";

export const ChatWindowSagas = {
  chatMessages : {
    get : function* (action: any) {
      try {
        const { data, status } = yield call(
          ChatWindowService.getAllChatMessages , action.payload.data
        );
        if (status == 200) {
          yield put(
            ChatWindowActions.chatMessages.success(data)
          )
        }

      } catch (error) {
        yield put(
            ChatWindowActions.chatMessages.fail(error.response.data?.errorCode)
        );
      }
    } 
  }
  ,
  userQueryResponse : {
    get : function* (action: any) {
      try {
        const { data, status } = yield call(
          ChatWindowService.getUserQueryResponse , action.payload.data
        );
        if (status == 200) {
          yield put(
            ChatWindowActions.userQueryResponse.success(data)
          )
        }

      } catch (error) {
        yield put(
            ChatWindowActions.userQueryResponse.fail(error.response.data?.errorCode)
        );
      }
    } 
  }
}

export default [
    takeLatest(
      ChatWindow.GET_ALL_CHAT_MESSAGES,
      ChatWindowSagas.chatMessages.get
    ),
    takeLatest(
      ChatWindow.GET_USER_QUERY_RESPONSE_CHAT_WINDOW,
      ChatWindowSagas.userQueryResponse.get
    )
  ]
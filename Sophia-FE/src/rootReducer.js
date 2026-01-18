import {combineReducers} from "redux"
import 
{
   changeState,
   updateSeatIDStringReducer,
   updateSelectedMovieIdReducer,
} 
from './reducer'
import 
{ 
    HomeReducer,
    LoginReducer,
    DashboardReducer,
    TasksReducer,
    ChatWindowReducer,
    OAuthReducer
  
} from "./reducers/index.ts"

 export default combineReducers({
    changeState,
    updateSeatIDStringReducer,
    updateSelectedMovieIdReducer,

     HomeReducer,
     LoginReducer,
     DashboardReducer,
     TasksReducer,
     ChatWindowReducer,
     OAuthReducer
 })
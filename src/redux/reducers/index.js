import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { loadingReducer } from "./loadingReducer";
import { userProfileReducer } from "./userProfileReducer";
const reducers = combineReducers({
  searchResult: searchReducer,
  loading: loadingReducer,
  userProfile: userProfileReducer,
});

export default reducers;

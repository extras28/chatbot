// Import reducers
import authReducer from "./authSlice";
import questionReducer from "../features/Question/questionSlice";
import usersListReducer from "../features/UserListScreen/UsersListSlice";

const {
  configureStore
} = require("@reduxjs/toolkit");

// root reducer
const rootReducer = {
  auth: authReducer,
  question: questionReducer,
  user: usersListReducer,

};

// app store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_DEV_TOOLS == 1 ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

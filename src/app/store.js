<<<<<<< HEAD
// Import reducers
import authReducer from "./authSlice";
import questionReducer from "./questionSlice"; 

const {
  configureStore
} = require("@reduxjs/toolkit");

// root reducer
const rootReducer = {
  auth: authReducer,
  question: questionReducer,
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
=======
// Import reducers
import authReducer from "./authSlice";

const {
  configureStore
} = require("@reduxjs/toolkit");

// root reducer
const rootReducer = {
  auth: authReducer,

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
>>>>>>> 4adf6ed6bd8b59ece71bd03f9375acc71a1d4b23

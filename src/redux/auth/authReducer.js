import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  // logoutRequest,
  logoutSuccess,
  logoutError,
  // getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  resetError,
} from "./authActions";

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: (_, __) => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: (_, __) => null,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, action) => action.payload,
  [loginError]: (_, action) => action.payload,
  [logoutError]: (_, action) => action.payload,
  [getCurrentUserError]: (_, action) => action.payload,
  [registerRequest]: () => null,
  [loginRequest]: () => null,
  [resetError]: () => null,
});

const isAuthenticatedReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  isAuthenticated: isAuthenticatedReducer,
  token: tokenReducer,
  error: errorReducer,
});
export default authReducer;

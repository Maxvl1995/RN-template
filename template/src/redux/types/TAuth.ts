import { Action } from "redux";

export type ActionBase<T = any> = {
  type: string;
  payload?: T;
};

export type TAuth =
  | "SIGN_IN_REQUEST"
  | "SIGN_IN_SUCCESS"
  | "SIGN_IN_FAILURE"
  | "SIGN_OUT";

export interface IActionSignInRequest extends Action<TAuth> {
  payload: {
    username: string;
    password: string;
  };
}

export interface IActionSignInSuccess extends Action<TAuth> {
  payload: {
    jwtAccessToken?: string | null;
    isAuthenticated?: boolean;
  };
}
export interface IActionLogout extends Action<TAuth> {}

export type TActionsAuth = IActionLogout &
  IActionSignInRequest &
  IActionSignInSuccess;

export type TAuthState = {
  isAuthenticated?: boolean;
  jwtAccessToken?: string | null;
  refreshToken?: string | null;
};

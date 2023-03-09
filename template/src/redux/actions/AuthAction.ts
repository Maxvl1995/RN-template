import {
  IActionLogout,
  IActionSignInRequest,
  IActionSignInSuccess,
} from "../types/TAuth";

export function signInRequest(payload: {
  username: string;
  password: string;
}): IActionSignInRequest {
  return {
    type: "SIGN_IN_REQUEST",
    payload,
  };
}

export function signInSuccess(payload: {
  jwtAccessToken?: string | null;
  refreshToken?: string | null;
  isAuthenticated?: boolean;
}): IActionSignInSuccess {
  return {
    type: "SIGN_IN_SUCCESS",
    payload,
  };
}

export function signOut(): IActionLogout {
  return {
    type: "SIGN_OUT",
  };
}

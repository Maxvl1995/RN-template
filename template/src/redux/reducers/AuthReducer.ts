import { ActionBase, TAuthState } from "../types/TAuth";

const initialState: TAuthState = {
  isAuthenticated: false,
  jwtAccessToken: null,
  refreshToken: null,
};

function AuthReducer(state = initialState, action: ActionBase): TAuthState {
  switch (action.type) {
    case "SIGN_IN_REQUEST":
      console.log(action);
      return {
        ...state,
      };
    case "SIGN_IN_FAILURE":
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        jwtAccessToken: action.payload.jwtAccessToken,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
}

export default AuthReducer;

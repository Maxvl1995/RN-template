import {
  CONTENT_TYPE,
  getBearerToken,
  TIME_OUT,
  TOKEN_KEY_HEADER,
} from "@config/api";
import { signInSuccess } from "@redux/actions/AuthAction";
import { TAuthState } from "@redux/types/TAuth";
import { ENVConfig } from "@config/env";
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { StyleSheet } from "react-native";
import { REFRESH_TOKEN_URL } from "./ApiUrl";
import { handleParameter, handleResponseAxios } from "./helper";
import { dispatch, getState } from "@common/redux";

export interface ResponseBase<T = any> {
  code: number;
  msg?: string | null;
  data?: T;
  status: boolean;
  msgCode?: string;
}

export interface ParamsNetwork {
  url: string;
  params?: any;
  path?: any;
  body?: any;
  headers?: AxiosRequestConfig["headers"];
}

let refreshTokenRequest: Promise<string | null> | null = null;
const AxiosInstance = Axios.create({});

AxiosInstance.interceptors.response.use(
  (response) => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      refreshTokenRequest = refreshTokenRequest
        ? refreshTokenRequest
        : refreshTK();
      const newToken = await refreshTokenRequest;
      refreshTokenRequest = null;
      if (newToken === null) {
        return Promise.reject(error);
      }
      originalRequest.headers[TOKEN_KEY_HEADER] = newToken;
      return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

// refresh token
async function refreshTK() {
  const { refreshToken }: TAuthState = getState("AuthReducer");
  return AxiosInstance.post(
    REFRESH_TOKEN_URL,
    {},
    {
      baseURL: ENVConfig.API_URL,
      timeout: TIME_OUT,
      headers: {
        "refresh-token": refreshToken,
      },
    }
  )
    .then((res: AxiosResponse) => {
      const payload = {
        jwtAccessToken: res?.data?.data?.access_token ?? null,
        refreshToken: res?.data?.data?.refresh_token ?? null,
        isAuthenticated: true,
      };
      dispatch(signInSuccess(payload));
      return res?.data?.data?.access_token;
    })
    .catch(() => null);
}

// base
function Request<T = unknown>(config: AxiosRequestConfig) {
  const { jwtAccessToken }: TAuthState = getState("AuthReducer");
  const defaultConfig: AxiosRequestConfig = {
    baseURL: ENVConfig.API_URL,
    timeout: TIME_OUT,
    headers: {
      "Content-Type": CONTENT_TYPE,
      [TOKEN_KEY_HEADER]: getBearerToken(jwtAccessToken),
    },
  };
  console.log("config", StyleSheet.flatten([defaultConfig, config]));
  return new Promise<ResponseBase<T> | null>((rs, rj) => {
    AxiosInstance.request(StyleSheet.flatten([defaultConfig, config]))
      .then((res: AxiosResponse<T>) => {
        const result = handleResponseAxios(res);
        rs(result);
      })
      .catch((error: AxiosError) => {
        console.log(error, "error");
        rj(error);
      });
  });
}

// get
async function Get<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "GET"));
}

// post
async function Post<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "POST"));
}

type ParameterPostFormData = AxiosRequestConfig & ParamsNetwork;
// post FormData
async function PostFormData<T>(params: ParamsNetwork) {
  const { jwtAccessToken }: TAuthState = getState("AuthReducer");
  const headers: AxiosRequestConfig["headers"] = {
    [TOKEN_KEY_HEADER]: getBearerToken(jwtAccessToken ?? ""),
    "Content-Type": "multipart/form-data",
  };
  return Request<T>(
    handleParameter<ParameterPostFormData>({ ...params, headers }, "POST")
  );
}

// put
async function Put<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "PUT"));
}

// delete
async function Delete<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, "DELETE"));
}

export type NetWorkResponseType<T> = (
  params: ParamsNetwork
) => Promise<ResponseBase<T> | null>;

export const NetWorkService = {
  Get,
  Post,
  Put,
  Delete,
  PostFormData,
  Request,
};

import {AxiosError, AxiosRequestConfig, AxiosResponse, Method} from 'axios';
import {ParamsNetwork, ResponseBase} from './configAPI';

const responseDefault: ResponseBase<any> = {
  code: -500,
  status: false,
  msg: 'error',
  data: {},
};

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

export const replaceAll = (source = '', textReplace = '', textInstead = '') => {
  return source.split(textReplace).join(textInstead);
};

export const onCheckType = (
  source: any,
  type: TypesBase,
): source is TypesBase => {
  return typeof source === type;
};

export const onPushLogout = async () => {
  console.log('logout now');
  /**
   * do something when logout
   */
};

export const handleResponseAxios = <T = any>(
  res: AxiosResponse<any>,
): ResponseBase<T> => {
  if (res.data) {
    return {
      code: res.status,
      status: res.data.success,
      data: res?.data?.data ?? undefined,
      msg: res.data.message,
      msgCode: res.data.errors,
    };
  }
  return responseDefault;
};

export const handleErrorAxios = (error: AxiosError) => {
  console.log('handleErrorAxios');
};

export const handlePath = (
  url: string,
  path: {[key: string]: string | number},
) => {
  if (!path || Object.keys(path).length <= 0) {
    return url;
  }
  let resUrl = url;
  Object.entries(path).forEach(([key, value], index) => {
    if (!index) {
      resUrl = resUrl + '?' + `${key}=${value}`;
    } else {
      resUrl = resUrl + '&' + `${key}=${value}`;
    }
  });
  return resUrl;
};

export const handleParameter = <T extends ParamsNetwork>(
  props: T,
  method: Method,
): AxiosRequestConfig => {
  const {url, body, path, params} = props;
  return {
    ...props,
    method,
    url: handlePath(url, path),
    data: body,
    params,
  };
};

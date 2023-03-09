export const CODE_DEFAULT = -200;
export const CODE_SUCCESS = 200;
export const ERROR_NETWORK_CODE = -100;
export const TIME_OUT = 120000;
export const STATUS_TIME_OUT = 'ECONNABORTED';
export const CODE_TIME_OUT = 408;
export const CONTENT_TYPE = 'application/json';
export const TOKEN_KEY_HEADER = 'authorization';
export const getBearerToken = (token?: string | null) => {
  return token ? `Bearer ${token}` : '';
};

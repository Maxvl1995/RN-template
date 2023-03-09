const Logger = {
  debug: (...arg: unknown[]) => {
    if (__DEV__) {
      console.debug(new Date().toISOString(), 'DVOLD DEBUG', ...arg);
    }
  },
  info: (...arg: unknown[]) => {
    if (__DEV__) {
      console.info(new Date().toISOString(), 'DVOLD INFO', ...arg);
    }
  },
  warn: (...arg: unknown[]) => {
    if (__DEV__) {
      console.warn(new Date().toISOString(), 'DVOLD WARN', ...arg);
    }
  },
  error: (...arg: unknown[]) => {
    if (__DEV__) {
      console.error(new Date().toISOString(), 'DVOLD ERROR', ...arg);
    }
  },
};

export default Logger;

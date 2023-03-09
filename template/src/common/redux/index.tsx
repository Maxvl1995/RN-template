import React, { createRef, forwardRef, memo, useImperativeHandle } from "react";
import isEqual from "react-fast-compare";
import { useSelector as useReduxSelector, useDispatch } from "react-redux";
import { TReduxState } from "@redux/store/configureStore";
import { ActionBase } from "@redux/types/TAuth";

function useSelector<T>(
  selector: (state: TReduxState) => T,
  equalityFn = isEqual
): T {
  return useReduxSelector<TReduxState, T>(selector, equalityFn);
}

const RXStoreComponent = forwardRef((props, ref) => {
  const rnDispatch = useDispatch();
  const store = useSelector((x) => x);

  // effect
  useImperativeHandle(
    ref,
    () => ({
      dispatch: (action: ActionBase) => {
        rnDispatch(action);
      },
      getState: (state: keyof TReduxState) => {
        return store[state];
      },
    }),
    [rnDispatch, store]
  );
  return null;
});

type RXStoreType = {
  dispatch: (action: ActionBase) => void;
  getState: <K extends keyof TReduxState>(selector: K) => TReduxState[K];
};

const storeRef = createRef<RXStoreType>();

export const RXStore = memo(() => <RXStoreComponent ref={storeRef} />, isEqual);

export const dispatch = (action: ActionBase) => {
  if (storeRef.current) {
    storeRef.current.dispatch(action);
  }
};
export function getState<K extends keyof TReduxState>(
  selector: K
): TReduxState[K] {
  if (storeRef.current) {
    return storeRef.current.getState(selector);
  }
  return {} as TReduxState[K];
}

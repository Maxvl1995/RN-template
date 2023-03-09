import React from "react";
import {
  NavigationContainerRef,
  CommonActions,
  StackActions,
} from "@react-navigation/native";
import { TGatherStackParamList } from "@stacks/types/TStack";

export const isTabRef: React.MutableRefObject<boolean | null> =
  React.createRef();
export const navigationRef = React.createRef<NavigationContainerRef>();
export const routeNameRef: React.MutableRefObject<string | null> =
  React.createRef();

export function navigate(
  name: keyof TGatherStackParamList,
  params?: Record<string, unknown>
) {
  navigationRef.current?.navigate(name, params);
}

export function pushToPage(
  name: keyof TGatherStackParamList,
  params?: object
): void {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function replace(
  name: keyof TGatherStackParamList,
  params?: Record<string, unknown>
) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
}

export function setRoot(routeName: keyof TGatherStackParamList, params = {}) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export const resetRoutes = (routeName: keyof TGatherStackParamList) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{ name: routeName }],
  });
  navigationRef.current?.dispatch(resetAction);
};

export function getCurrentRoute() {
  const currentRoute = navigationRef.current?.getCurrentRoute();
  return currentRoute?.name;
}

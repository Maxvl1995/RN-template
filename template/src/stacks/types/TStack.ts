import { NavigationProp, RouteProp } from "@react-navigation/native";

export type TRootParamsList = {};

export type TGatherStackParamList = TRootParamsList;

export declare interface IDefaultScreenProps<
  T extends keyof TGatherStackParamList
> {
  navigation: TGatherStackParamList;
  route: RouteProp<TGatherStackParamList, T>;
}

export type TNavigation = NavigationProp<
  TGatherStackParamList,
  keyof TGatherStackParamList
>;

export type TRouteNavigation<T extends keyof TGatherStackParamList> = RouteProp<
  TGatherStackParamList,
  T
>;

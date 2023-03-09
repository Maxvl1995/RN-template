import {Route, TabBarProps} from 'react-native-tab-view';

export interface IPropsTabBar {
  TabBarProps: TabBarProps<Route>;
  onSetIndex: (i: number) => void;
}

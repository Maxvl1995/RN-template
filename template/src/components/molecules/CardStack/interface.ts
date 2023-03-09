import {ReactElement} from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ICardStack {
  title: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconProps?: ReactElement;
  contentProps: ReactElement;
  heightProps?: number;
}

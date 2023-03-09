import {TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface ITextInputProps extends TextInputProps {
  containerStyles?: ViewStyle;
  textInputStyles?: TextStyle;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

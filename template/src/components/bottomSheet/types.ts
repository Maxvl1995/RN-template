import {ViewStyle} from 'react-native';
import {ModalProps} from 'react-native-modal';

interface IDefaultFunction {
  close: () => void;
}

export interface IBottomSheetProps {
  containerStyles?: ViewStyle;
  isShowCrossBar?: boolean;
}
export interface IBottomSheetRef extends IDefaultFunction {
  open: (
    element: () => Element,
    params?: IBottomSheetProps,
    modalProps?: ModalProps,
  ) => void;
}

import React from 'react';
import {IBottomSheetProps, IBottomSheetRef} from './types';
import {ModalProps} from 'react-native-modal';

export const bottomSheetRef = React.createRef<IBottomSheetRef>();

export const openBottomSheet = (
  element: () => Element,
  params?: IBottomSheetProps,
  modalProps?: ModalProps,
) => {
  bottomSheetRef.current?.open(
    element,
    params,
    modalProps ?? ({} as ModalProps),
  );
};

export const closeBottomSheet = () => bottomSheetRef.current?.close();

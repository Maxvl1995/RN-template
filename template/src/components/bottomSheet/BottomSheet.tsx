import React, { useEffect, useRef } from "react";
import ReactNativeModal, { ModalProps } from "react-native-modal";
import styles from "./styles";
import { IBottomSheetProps, IBottomSheetRef } from "./types";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, ViewStyle, Animated } from "react-native";
import mAnimated from "@utils/methods/mAnimated";
import { ratioW, screenHeight } from "@utils/UDimension";

const BottomSheet = React.forwardRef<IBottomSheetRef, IBottomSheetProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const [contentModal, setContentModal] = React.useState<JSX.Element | null>(
      null
    );
    const [containerStyles, setContainerStyles] = React.useState<
      ViewStyle | undefined
    >({});
    const [modalProps, setModalProps] = React.useState<ModalProps | null>(null);
    const [isShowCrossBar, setIsShowCrossBar] = React.useState(true);

    const onCloseModal = () => setIsVisible(false);
    const animatedRef = useRef<Animated.Value>(new Animated.Value(ratioW(0)));

    React.useImperativeHandle(
      ref,
      () => ({
        open: (element, params, mProps) => {
          setIsShowCrossBar(params?.isShowCrossBar ?? true);
          setContainerStyles(params?.containerStyles);
          setContentModal(element);
          mProps && setModalProps(mProps);
          setIsVisible(true);
        },
        close: () => {
          setContainerStyles({});
          setContentModal(null);
          setModalProps(null);
          setIsVisible(false);
        },
      }),
      []
    );

    useEffect(() => {
      if (isVisible) {
        mAnimated.changeAnimated({
          toValue: screenHeight,
          duration: 200,
          useNativeDriver: true,
          value: animatedRef.current,
        });
      } else {
        mAnimated.changeAnimated({
          toValue: 0,
          useNativeDriver: true,
          value: animatedRef.current,
        });
      }
    }, [isVisible]);

    return (
      <ReactNativeModal
        style={styles.modal}
        isVisible={isVisible}
        onDismiss={onCloseModal}
        onBackdropPress={onCloseModal}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}
        {...modalProps}
      >
        {isShowCrossBar && <View style={styles.crossbarContainer} />}
        <SafeAreaView style={[styles.container, containerStyles]}>
          {contentModal}
        </SafeAreaView>
      </ReactNativeModal>
    );
  }
);

export default BottomSheet;

import mAnimated from "@s/methods/mAnimated";
import React, { useEffect, useRef } from "react";
import Modal from "react-native-modal";
import { Animated, StyleSheet } from "react-native";
import { IPickerModalProps } from "./interface";

const DuxModal: React.FC<IPickerModalProps> = ({
  isVisible,
  onclose,
  children,
}) => {
  const animatedRef = useRef(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      mAnimated.changeAnimated({
        value: animatedRef.current,
        toValue: 1,
      });
    } else {
      mAnimated.changeAnimated({
        value: animatedRef.current,
        toValue: 0,
        duration: 150,
      });
    }
  }, [isVisible]);

  const sView = StyleSheet.flatten([
    { transform: [{ scale: animatedRef.current }], flex: 1 },
  ]);

  return (
    <Modal
      style={styles.modal}
      animationIn="zoomIn"
      isVisible={isVisible}
      animationOut="fadeOut"
      backdropOpacity={0.1}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      onBackdropPress={onclose}
    >
      <Animated.View style={sView} pointerEvents="box-none">
        {children}
      </Animated.View>
    </Modal>
  );
};

export default DuxModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});

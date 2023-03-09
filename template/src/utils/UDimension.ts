import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const dSizeWidth = 414;

export const ratioW = (_width: number) => {
  return (_width * width) / dSizeWidth;
};

export const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
};

export const ifIphoneX = (iphoneXStyle: number, regularStyle: number) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

export const getStatusBarHeight = (safe: boolean) => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 40),
    android: StatusBar.currentHeight,
  });
};

export const fontSizeText = (size: number) => {
  const scaleFont = width / dSizeWidth;
  const newSize = size * scaleFont;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

export const DEFAULT_ICON_SIZE = {
  width: ratioW(20),
  height: ratioW(20),
};

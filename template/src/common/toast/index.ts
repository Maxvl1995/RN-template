import Toast from 'react-native-toast-message';

export enum ToastType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

interface IToastProps {
  type: ToastType;
  title: string;
  content: string;
}
export const showToast = ({type, title, content}: IToastProps) => {
  Toast.show({
    type: type,
    text1: title,
    text2: content,
    position: 'top',
  });
};

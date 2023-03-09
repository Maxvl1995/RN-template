import { TButtonVoid } from "@definitions/TButton";

export interface IPickerModalProps {
  isVisible: boolean;
  onclose?: TButtonVoid;
  children?: Element;
}

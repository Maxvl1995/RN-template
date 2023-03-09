import {
  create,
  MMKVLoader,
  MMKVInstance,
  ProcessingModes,
} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader()
  // MODES.MULTI_PROCESS = ACCESSIBLE BY APP GROUP (iOS)
  .setProcessingMode(ProcessingModes.SINGLE_PROCESS)
  .withEncryption()
  .initialize();
export const useUserPreferences = create(MMKV);

class UserPreferences {
  private mmkv: MMKVInstance;
  constructor() {
    this.mmkv = MMKV;
  }

  getString(key: string) {
    try {
      return this.mmkv.getString(key) || null;
    } catch {
      return null;
    }
  }

  setString(key: string, value: string) {
    return this.mmkv.setString(key, value);
  }

  getBool(key: string): boolean | null {
    try {
      return this.mmkv.getBool(key) || null;
    } catch {
      return null;
    }
  }

  setBool(key: string, value: boolean) {
    return this.mmkv.setBool(key, value);
  }

  getMap(key: string): object | null {
    try {
      return this.mmkv.getMap(key) || null;
    } catch {
      return null;
    }
  }

  setMap(key: string, value: object) {
    return this.mmkv.setMap(key, value);
  }

  removeItem(key: string) {
    return this.mmkv.removeItem(key);
  }
}

const userPreferences = new UserPreferences();
export default userPreferences;

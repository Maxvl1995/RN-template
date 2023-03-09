import React from "react";
import { colors } from "./theme/colors";
import {
  getTheme,
  initialTheme,
  newThemeState,
  subscribeTheme,
} from "./theme/UTheme";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store/configureStore";
import { Provider } from "react-redux";
import { StatusBar } from "./components/atoms/index";
import { StyleSheet } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import Toast from "react-native-toast-message";
import AppContainer from "./AppContainer";
import { loadingRef } from "./components/Loading/function";
import Loading from "./components/Loading";
import { BottomSheet } from "./components/bottomSheet";
import { bottomSheetRef } from "./components/bottomSheet/function";
import { IThemePreference } from "@theme/TTheme";
import { ThemeContext, TSupportedThemes } from "./theme";

interface IState {
  theme: TSupportedThemes;
  themePreferences: IThemePreference;
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default class Root extends React.Component<
  Record<string, never>,
  IState
> {
  constructor(props: Record<string, never>) {
    super(props);
    const theme = initialTheme();
    this.state = {
      theme: getTheme(theme),
      themePreferences: theme,
    };
  }

  setTheme = (newTheme = {}) => {
    this.setState(
      (prevState) => newThemeState(prevState, newTheme as IThemePreference),
      () => {
        const { themePreferences } = this.state;
        subscribeTheme(themePreferences, this.setTheme);
      }
    );
  };

  render() {
    const { theme, themePreferences } = this.state;
    const themeValue = {
      theme,
      themePreferences,
      setTheme: this.setTheme,
      colors: colors[theme],
    };

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ThemeContext.Provider value={themeValue}>
              <StatusBar />
              <SafeAreaView
                style={styles.container}
                edges={["left", "right", "top"]}
              >
                <AppContainer />
                <Toast />
                <Loading ref={loadingRef} />
                <BottomSheet ref={bottomSheetRef} />
              </SafeAreaView>
            </ThemeContext.Provider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

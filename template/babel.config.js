module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ts", ".tsx", ".js", "jsx", ".ios.js", ".android.js"],
        alias: {
          "@components": "./src/components",
          "@config": "./src/config",
          "@navigation": "./src/navigation",
          "@network": "./src/network",
          "@redux": "./src/redux",
          "@utils": "./src/utils",
          "@theme": "./src/theme",
          "@i18n": "./src/i18n",
          "@screens": "./src/screens",
          "@common": "./src/common",
          "@assets": "./src/assets",
          "@stacks": "./src/stacks",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"], //removing consoles.log from app during release (production) versions
    },
  },
};

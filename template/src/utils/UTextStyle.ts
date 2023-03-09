import {Platform, StyleSheet} from 'react-native';

export const KanitFonts = {
  Black: {
    fontFamily: 'Kanit-Black', // 900
  },
  BlackItalic: {
    fontFamily: 'Kanit-BlackItalic', // 900
  },
  ExtraBold: {
    fontFamily: 'Kanit-ExtraBold', // 800
  },
  ExtraBoldItalic: {
    fontFamily: 'Kanit-ExtraBoldItalic', // 800
  },
  Bold: {
    fontFamily: 'Kanit-Bold', // 700
  },
  BoldItalic: {
    fontFamily: 'Kanit-BoldItalic', // 700
  },
  SemiBold: {
    fontFamily: 'Kanit-SemiBold', // 600
  },
  SemiBoldItalic: {
    fontFamily: 'Kanit-SemiBoldItalic', // 600
  },
  Medium: {
    fontFamily: 'Kanit-Medium', // 500
  },
  MediumItalic: {
    fontFamily: 'Kanit-MediumItalic', // 500
  },
  Regular: {
    fontFamily: 'Kanit-Regular', // 400
  },
  Light: {
    fontFamily: 'Kanit-Light', // 300
  },
  LightItalic: {
    fontFamily: 'Kanit-LightItalic', // 300
  },
  ExtraLight: {
    fontFamily: 'Kanit-ExtraLight', // 200
  },
  ExtraLightItalic: {
    fontFamily: 'Kanit-ExtraLightItalic', // 200
  },
  Thin: {
    fontFamily: 'Kanit-Thin', // 100
  },
};

export const TKanitStyle = StyleSheet.create({
  H6496Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 64,
    lineHeight: 96,
  },
  H4864Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 48,
    lineHeight: 64,
  },
  H3248Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 32,
    lineHeight: 48,
  },
  H2436Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2436Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2436Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 24,
    lineHeight: 36,
  },
  H2028BoldCap: {
    ...KanitFonts.Black,
    ...Platform.select({
      ios: {
        fontWeight: '900',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H2028Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 20,
    lineHeight: 28,
  },
  H1826Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1826Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1826Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 18,
    lineHeight: 26,
  },
  H1624Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1624Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1624Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 16,
    lineHeight: 24,
  },
  H1420Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1420Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1420Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 14,
    lineHeight: 20,
  },
  H1216Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H1216Medium: {
    ...KanitFonts.Medium,
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H1216Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  H812Regular: {
    ...KanitFonts.Regular,
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
    }),
    fontSize: 8,
    lineHeight: 12,
  },
  H1012Bold: {
    ...KanitFonts.Bold,
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
    }),
    fontSize: 10,
    lineHeight: 12,
  },
});

import { TextStyle } from 'react-native';

interface Typography {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  bodyMd: TextStyle;
  bodyLg: TextStyle;
  labelMd: TextStyle;
  priceDisplay: TextStyle;
}

const typography: Typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    letterSpacing: -0.4,
    fontFamily: 'PlusJakartaSans-Bold',
  },

  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 31,
    fontFamily: 'PlusJakartaSans-Bold',
  },

  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  bodyLg: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 29,
    fontFamily: 'PlusJakartaSans-Regular',
  },

  bodyMd: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 26,
    fontFamily: 'PlusJakartaSans-Regular',
  },

  labelMd: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17,
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  priceDisplay: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
  },
};

export default typography;

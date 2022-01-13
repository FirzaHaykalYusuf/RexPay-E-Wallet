import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  //base colors
  primary: '#707576', //Gray
  secondary: '#4F4F4F', //Dark Gray 1

  green: '#66D59A',
  lightGreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',

  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightPurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#BDBDBD',
  gray: '#4F4F4F',
  darkGray: '#333333',

  transparent: 'transparent',
};

export const SIZES = {
  //global size
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  //font size
  largeTittle: 50,
  h1: 28,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 27,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  //app dimensions
  width,
  height,
};

export const FONTS = {
  largeTittle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTittle,
    lineHeight: 50,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h5: {fontFamily: 'Rubik-Medium', fontSize: SIZES.h5, lineHeight: 30},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 36},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

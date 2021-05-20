const colors = {
  purple: {
    50: <const>'#f8f4f9',

    100: <const>'#f2e9f8',

    200: <const>'#eadaf7',

    300: <const>'#dcbef5',

    400: <const>'#c795f2',

    500: <const>'#b169eb',

    600: <const>'#9b46dc',

    700: <const>'#8431bf',

    800: <const>'#6f2a9c',

    900: <const>'#5b237d',
  },

  pink: {
    50: <const>'#faf1f2',

    100: <const>'#f9e7ec',

    200: <const>'#f7d1e1',

    300: <const>'#f3accd',

    400: <const>'#ed78af',

    500: <const>'#e44e93',

    600: <const>'#d22c72',

    700: <const>'#b71d58',

    800: <const>'#981b48',

    900: <const>'#801b3e',
  },

  trueGray: {
    50: <const>'#f8f8f4',

    100: <const>'#f4f3ee',

    200: <const>'#e6e4dd',

    300: <const>'#d7d4cc',

    400: <const>'#a8a29b',

    500: <const>'#77716c',

    600: <const>'#544f4c',

    700: <const>'#413e3a',

    800: <const>'#272521',

    900: <const>'#191714',
  },

  rose: {
    50: <const>'#faf0ec',

    100: <const>'#fae4e0',

    200: <const>'#f8cfcd',

    300: <const>'#f6a7ab',

    400: <const>'#f37485',

    500: <const>'#ea4262',

    600: <const>'#d6204a',

    700: <const>'#b5163b',

    800: <const>'#981636',

    900: <const>'#831733',
  },

  red: {
    50: <const>'#faf1ec',

    100: <const>'#f9e2db',

    200: <const>'#f8cbc4',

    300: <const>'#f5a6a1',

    400: <const>'#f07373',

    500: <const>'#e54549',

    600: <const>'#d1262a',

    700: <const>'#b01d1e',

    800: <const>'#921c1c',

    900: <const>'#791e1d',
  },

  warmGray: {
    50: <const>'#f8f8f3',

    100: <const>'#f4f3ed',

    200: <const>'#e8e4dc',

    300: <const>'#d8d3c9',

    400: <const>'#ada196',

    500: <const>'#7c6e65',

    600: <const>'#595048',

    700: <const>'#453d37',

    800: <const>'#2a2420',

    900: <const>'#1d1914',
  },

  cyan: {
    50: <const>'#f0fcf9',

    100: <const>'#dcf8f7',

    200: <const>'#c0f2f5',

    300: <const>'#92e8f1',

    400: <const>'#57d4e4',

    500: <const>'#37b6c8',

    600: <const>'#2b90a5',

    700: <const>'#277283',

    800: <const>'#265c6a',

    900: <const>'#234c59',
  },

  amber: {
    50: <const>'#fbf8e8',

    100: <const>'#f9f0c1',

    200: <const>'#f8e284',

    300: <const>'#f6cd44',

    400: <const>'#f4b82a',

    500: <const>'#ec981c',

    600: <const>'#d07114',

    700: <const>'#ac4f11',

    800: <const>'#8c3d11',

    900: <const>'#73320f',
  },

  violet: {
    50: <const>'#f4f2f8',

    100: <const>'#eeeaf7',

    200: <const>'#e1daf6',

    300: <const>'#ccbff4',

    400: <const>'#b39bef',

    500: <const>'#9870e9',

    600: <const>'#874edf',

    700: <const>'#7539c9',

    800: <const>'#602da8',

    900: <const>'#4f2689',
  },

  gray: {
    50: <const>'#f8f8f4',

    100: <const>'#f3f3ee',

    200: <const>'#e5e4df',

    300: <const>'#d7d4d0',

    400: <const>'#a7a1a1',

    500: <const>'#766f72',

    600: <const>'#555054',

    700: <const>'#413d3f',

    800: <const>'#282625',

    900: <const>'#1a1817',
  },

  fuchsia: {
    50: <const>'#faf3f8',

    100: <const>'#f8e9f8',

    200: <const>'#f3d4f7',

    300: <const>'#eeaff4',

    400: <const>'#e781f0',

    500: <const>'#d853e4',

    600: <const>'#bf34c6',

    700: <const>'#a227a3',

    800: <const>'#872185',

    900: <const>'#72206d',
  },

  orange: {
    50: <const>'#fbf5e8',

    100: <const>'#faebcf',

    200: <const>'#f8d5a3',

    300: <const>'#f6b772',

    400: <const>'#f38e3b',

    500: <const>'#ef7225',

    600: <const>'#df581b',

    700: <const>'#b84014',

    800: <const>'#933213',

    900: <const>'#762b13',
  },

  indigo: {
    50: <const>'#eff2f8',

    100: <const>'#e4e8f8',

    200: <const>'#d1d7f6',

    300: <const>'#b4bff2',

    400: <const>'#939ced',

    500: <const>'#7477e4',

    600: <const>'#5d56d6',

    700: <const>'#4c43ba',

    800: <const>'#3d3795',

    900: <const>'#363275',
  },

  blue: {
    50: <const>'#f0f5f8',

    100: <const>'#e1ebf7',

    200: <const>'#ccdff6',

    300: <const>'#a9cdf4',

    400: <const>'#7bb2ef',

    500: <const>'#5793e9',

    600: <const>'#3e72dc',

    700: <const>'#315ac8',

    800: <const>'#2b46a0',

    900: <const>'#283d7d',
  },

  lightBlue: {
    50: <const>'#f2f7f8',

    100: <const>'#e6f1f7',

    200: <const>'#cae7f5',

    300: <const>'#9bd8f3',

    400: <const>'#60c4ed',

    500: <const>'#3aacdc',

    600: <const>'#2687b8',

    700: <const>'#1e6a92',

    800: <const>'#1c5878',

    900: <const>'#1c4962',
  },

  teal: {
    50: <const>'#f2fbf3',

    100: <const>'#daf8ea',

    200: <const>'#b7f3dc',

    300: <const>'#88e7cc',

    400: <const>'#5ad1b6',

    500: <const>'#3db49c',

    600: <const>'#2d8f7e',

    700: <const>'#267165',

    800: <const>'#225a51',

    900: <const>'#204a43',
  },

  emerald: {
    50: <const>'#effaee',

    100: <const>'#dbf7dd',

    200: <const>'#baf0c8',

    300: <const>'#8ce3b1',

    400: <const>'#58cd95',

    500: <const>'#36b27d',

    600: <const>'#258e65',

    700: <const>'#1d7152',

    800: <const>'#195941',

    900: <const>'#154936',
  },

  green: {
    50: <const>'#f1faed',

    100: <const>'#dbf7dd',

    200: <const>'#c8f3c8',

    300: <const>'#9ceaa6',

    400: <const>'#67d781',

    500: <const>'#41bb63',

    600: <const>'#30984e',

    700: <const>'#28763e',

    800: <const>'#245d33',

    900: <const>'#204c2b',
  },

  lime: {
    50: <const>'#f5fbdf',

    100: <const>'#e4f9c1',

    200: <const>'#cdf595',

    300: <const>'#b9ed62',

    400: <const>'#a4df41',

    500: <const>'#87c229',

    600: <const>'#68971b',

    700: <const>'#4f7216',

    800: <const>'#415a14',

    900: <const>'#384d14',
  },

  yellow: {
    50: <const>'#faf9e4',

    100: <const>'#faf5bf',

    200: <const>'#f9eb88',

    300: <const>'#f7da4a',

    400: <const>'#f3c425',

    500: <const>'#e3a91b',

    600: <const>'#c38014',

    700: <const>'#9b5b10',

    800: <const>'#804811',

    900: <const>'#6d3b12',
  },

  coolGray: {
    50: <const>'#f8f8f5',

    100: <const>'#f3f3ef',

    200: <const>'#e7e6e3',

    300: <const>'#d5d5d2',

    400: <const>'#a3a3a5',

    500: <const>'#717177',

    600: <const>'#4f535a',

    700: <const>'#3a4049',

    800: <const>'#232830',

    900: <const>'#141821',
  },

  blueGray: {
    50: <const>'#f7f8f6',

    100: <const>'#f1f4f2',

    200: <const>'#e5e8e8',

    300: <const>'#d1d6d8',

    400: <const>'#9da3ae',

    500: <const>'#6b7381',

    600: <const>'#4c5460',

    700: <const>'#37404c',

    800: <const>'#222934',

    900: <const>'#131824',
  },

  black: <const>'#010201',

  white: <const>'#fbfdfb',
}

export default colors

export type Colors = typeof colors
export type Color = keyof Colors

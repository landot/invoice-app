import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        brightPurple: string,
        lightPurple: string,
        darkDesaturatedBlue: string,
        darkBlue: string,
        lightGrayBlue: string,
        grayBlue: string,
        gray: string,
        mediumGray: string,
        black: string,
        mirageBlack: string,
        red: string,
        lightRed: string,
        lightGray: string,
        white: string,
        green: string,
        greenWithOpacity: string,
        orange: string,
        orangeWithOpacity: string,
        darkGray: string,
        darkGrayWithOpacity: string,
    },
    weight: {
        normal: string,
        bold: string,
    },
    fontSize: {
        small: string,
        medium: string,
        large: string,
        extraLarge: string,
    },
    lineHeight: {
       extraSmall: string,
       small: string,
       medium: string,
       large: string,
       extraLarge: string,
    },
    spacing: {
        small: string,
        medium: string,
        large: string,
        extraLarge: string,
    }
  }
}
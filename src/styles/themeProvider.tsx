import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components"

export const theme: DefaultTheme = {
    colors: {
        brightPurple: "#7C5DFA",
        lightPurple: "#9277FF",
        darkDesaturatedBlue: "#1E2139",
        darkBlue: "#252945",
        lightGrayBlue: "#DFE3FA",
        grayBlue: "#7E88C3",
        gray: "#888EB0",
        mediumGray: "777F98",
        black: "#0C0E16",
        mirageBlack: "#141625",
        red: "#EC5757",
        lightRed: "#FF9797",
        lightGray: "#F8F8FB",
        white: "#FFFFFF",
        green: "#33D69F",
        greenWithOpacity: "rgb(51, 214, 159, .05)",
        orange: "#FF8F00",
        orangeWithOpacity: "rgb(255, 143, 0, .05)",
        darkGray: "#373B53",
        darkGrayWithOpacity: "rgb(55, 59, 83, .05)",
    },
    weight: {
        normal: '500',
        bold: '700'
    },
    fontSize: {
        small: "13px",
        medium: "15px",
        large: "24px",
        extraLarge: "36px"
    },
    lineHeight: {
       extraSmall: "15px",
       small: "18px",
       medium: "22px",
       large: "24px",
       extraLarge: "33px",
    },
    spacing: {
        small: "-.1px",
        medium: "-.25px",
        large: "-.75px",
        extraLarge: "-1px"
    }
}

const Theme = (props: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;

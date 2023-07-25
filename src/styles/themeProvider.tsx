import { ReactNode } from "react";
import { ThemeProvider } from "styled-components"
import { theme } from "./theme";

const Theme = (props: { children: ReactNode }) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;

import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "../../../config/theme";

interface ThemeProviderWrapperProps {
    children: React.ReactNode;
}

const ThemeProviderWrapper = ({children}: ThemeProviderWrapperProps) => (
    <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
);

export default ThemeProviderWrapper;
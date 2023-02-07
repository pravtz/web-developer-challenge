/// <reference types="vite/client" />


import darkTheme from "./styles/theme/dark";

type Theme = typeof darkTheme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
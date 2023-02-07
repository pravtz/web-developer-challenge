import { ThemeProvider } from 'styled-components'
import GlobalStyled from '../styles/global'
import darkTheme from '../styles/theme/dark'


type MyThemeProviderType = {
    children: React.ReactNode
}


export const MyThemeProvider = ({ children }: MyThemeProviderType) => {

    return (
        <ThemeProvider theme={darkTheme}>
            {children}
            <GlobalStyled />
        </ThemeProvider>
    )

}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyled from './styles/global'
import darkTheme from './styles/theme/dark'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
      <GlobalStyled />
    </ThemeProvider>
  </React.StrictMode>,
)

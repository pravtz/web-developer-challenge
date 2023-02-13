import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import  PostContextProvider  from './context/PostContext'
import { MyThemeProvider } from './utils/myThemeProvider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostContextProvider>
      <MyThemeProvider>
        <App />
      </MyThemeProvider>
      </PostContextProvider>
  </React.StrictMode>,
)

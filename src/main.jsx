import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MenuProvider } from './context/MenuContext.jsx'
import { VideoContextProvider } from './context/VideoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </MenuProvider>
  </React.StrictMode>
)

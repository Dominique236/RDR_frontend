import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import AuthProvider from '../auth/AuthProvider'
import WaitProvider from '../wait/WaitProvider'

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <AuthProvider>
      <WaitProvider>
        <Routing />
      </WaitProvider>
    </AuthProvider>
  </React.StrictMode>,
)



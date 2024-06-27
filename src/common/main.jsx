import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import AuthProvider from '../auth/AuthProvider'
import WaitProvider from '../wait/WaitProvider'
import FightProvider from '../fight/FightProvider'

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <AuthProvider>
      <WaitProvider>
        <FightProvider>
          <Routing />
        </FightProvider>
      </WaitProvider>
    </AuthProvider>
  </React.StrictMode>,
)



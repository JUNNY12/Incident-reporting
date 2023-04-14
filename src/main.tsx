import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { IncidentsProvider, } from './context/userIncidentContext'
import { AllIncidentsProvider } from './context/AllIncidentContext'
import { SearchProvider } from './context/SearchContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <AllIncidentsProvider>
          <IncidentsProvider>
            <App />
          </IncidentsProvider>
        </AllIncidentsProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

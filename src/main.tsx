import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/home/Home.tsx'
import './index.css'
import { Provider } from './Provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Home />
    </Provider>
  </StrictMode>,
)

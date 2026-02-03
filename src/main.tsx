import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query.ts'
import { AuthProvider } from './context/auth/auth.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastProviderCustom } from '@/components/ui/toast'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ToastProviderCustom>
      <App />
    </ToastProviderCustom>
  </HelmetProvider>
);

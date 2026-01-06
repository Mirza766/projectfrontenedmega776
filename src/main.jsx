import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import SubscriptionContextProvider from './components/context/SubscriptionContextProvider.jsx'
import { AuthProvider } from './AuthContext/Auth.jsx'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store} >
    <SubscriptionContextProvider>
      <AuthProvider>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
    </SubscriptionContextProvider>
    
   </Provider>
   </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QuioscoProvider } from './context/QuioscoProviders'
import './index.css'
import router from './router'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
     {/*Para mostrar nuestra informacion con Providers  */}
    <QuioscoProvider>
      <RouterProvider router={router} />
    </QuioscoProvider>
  </React.StrictMode>,
)

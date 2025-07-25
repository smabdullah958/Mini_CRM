import { store } from "./Redux_Toolkit/store.js";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>

  </BrowserRouter>
  
)

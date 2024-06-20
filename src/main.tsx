import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from "axios";
axios.defaults.baseURL = 'https://restcountries.com'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

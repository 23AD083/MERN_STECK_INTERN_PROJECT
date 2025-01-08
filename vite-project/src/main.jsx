//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Components1,Components2,Components3,Components4} from "./Components.jsx"

//createRoot(document.getElementById('root')).render(<Header/>)
createRoot(document.getElementById('root')).render(
  <>
  <Header/>
  <Components1/>
  <Footer/>
  </>
)

export default App
//createRoot(document.getElementById('root')).render(<Footer/>)

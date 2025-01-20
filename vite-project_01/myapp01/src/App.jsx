import Header from 'Header.jsx'
import Content from 'Content.jsx'
import Footer from 'Footer.jsx'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        [1,2,3,4,5].map(i => <li> {i} </li> )
</div>


      <div>


      </div>
      <div>
        <Content/>
      </div>
      
      <div>
        <Footer/>
      </div>
      
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'

import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
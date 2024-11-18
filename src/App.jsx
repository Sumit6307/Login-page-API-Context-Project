import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
//import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>

    <h1>Made with Context API</h1>

       <Login/>
       <Profile/>

    </UserContextProvider>
  )
}

export default App

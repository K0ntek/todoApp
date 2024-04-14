import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className=' lg:flex'>
        <div className=' w-full lg:w-[450px]'>
          <Navbar/>
        </div>
        <TodoList/>
      </div>
      <Footer/>
    </div>
  )
}

export default App

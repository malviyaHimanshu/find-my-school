import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

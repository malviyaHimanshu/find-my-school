import Footer from './Footer'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter , Route, Routes, ScrollRestoration } from 'react-router-dom'
import Schools from './Schools'
import SchoolDetails from './SchoolDetails'
import ErrorPage from './ErrorPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/college" element={ <Schools /> }></Route>
            <Route path="/college/:id" element={ <SchoolDetails /> }></Route>
            <Route path="*" element={ <ErrorPage /> }></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

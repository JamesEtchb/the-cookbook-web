import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Latin from './components/Latin.js'
import Asian from './components/Asian.js'
import African from './components/African.js'
import European from './components/European.js'
import NorthAmerican from './components/NorthAmerican.js'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Asian' element={<Asian />} />
        <Route path='African' element={<African />} />
        <Route path='European' element={<European />} />
        <Route path='Latin' element={<Latin />} />
        <Route path='NorthAmerican' element={<NorthAmerican />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

const NotFound = () => {
  return (
    <>
      <img
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
        alt="404 page"
      />
    </>
  )
}

export default App

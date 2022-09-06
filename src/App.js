import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import FoodNavbar from './components/FoodNavbar.js'

import Asian from './Pages/Asian.js'
import African from './Pages/African.js'
import European from './Pages/European.js'
import Latin from './Pages/Latin.js'
import NorthAmerican from './Pages/NorthAmerican.js'
import Home from './Pages/Home'
import PersonalCookbook from './Pages/PersonalCookbook'
import About from './Pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
    <FoodNavbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='Asian' element={<Asian />} />
        <Route path='African' element={<African />} />
        <Route path='European' element={<European />} />
        <Route path='Latin' element={<Latin />} />
        <Route path='NorthAmerican' element={<NorthAmerican />} />
        <Route path='Personal' element={<PersonalCookbook />} />
        <Route path='About' element={<About />} className='about' />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
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

import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'

import Footer from './components/Footer'
import BooksPage from './pages/BooksPage'
import FeaturedBooks from './components/FeaturedBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar/>
      <Header/>
      <HeroSlider/>
      {/* <FeaturedBooks/> */}
      <BooksPage/>
      <Footer/>
    </>
  )
}

export default App

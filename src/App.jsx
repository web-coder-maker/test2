// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Events from './assets/components/Events'
import Facilities from './assets/components/Facilities'
import Featured from './assets/components/Featured'
import Footer from './assets/components/Footer'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Reviews from './assets/components/Reviews'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Featured></Featured>
      <Facilities></Facilities>
      <Reviews></Reviews>
      <Events></Events>
      <Footer></Footer>
    </>
  )
}

export default App

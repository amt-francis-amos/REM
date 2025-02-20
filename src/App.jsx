import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Trip from './pages/Trip'
import Needs from './pages/Needs'
import Donate from './pages/Donate'



const App = () => {
  return (
    <div>
      <Navbar />
        <Routes> 
          <Route path="/"  element={<Home /> }/>
          <Route path="/about"  element={<About /> }/>
          <Route path="/team"  element={<Team /> }/>
          <Route path="/gallery"  element={<Gallery /> }/>
          <Route path="/trip"  element={<Trip /> }/>
          <Route path="/need"  element={<Needs /> }/>
          <Route path="/donate"  element={<Donate /> }/>
        </Routes>
     <Footer />
    </div>
  )
}

export default App
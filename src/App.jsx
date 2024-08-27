import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import { Home, About, Achievements, Profiles, Explore, Login, SignUp } from './components/pages'


const App = () => {
  return (
   <main className='bg-slate-300/20'>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/explore' element={<Explore />}/>
      <Route path='/profiles' element={<Profiles />}/>
      <Route path='/achievements' element={<Achievements />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </Router>

   </main>
    )
}

export default App
// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { TicketInfo } from './components/TicketInfo'
import './styles/App.css'
import { AllTicketsList } from './components/AllTicketsList'
import { Generator } from './components/Generator'

function App() {
  return (
    <>
    <main>
    <Router>
    <Routes>
      <Route path='/' element={<Generator />}/>
      <Route path='/tickets-list' element={<AllTicketsList />}/>
    </Routes>
    </Router>
    </main>
    <Footer />
    </>
  )
}

export default App

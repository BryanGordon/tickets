import './styles/App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { AllTicketsList } from './components/AllTicketsList'
import { Generator } from './components/Generator'
import { ValidatePage } from './components/ValidatePage'

function App () {
  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Generator />}/>
            <Route path='/tickets-list' element={<AllTicketsList />}/>
            <Route path='/validation/:id' element={<ValidatePage />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App

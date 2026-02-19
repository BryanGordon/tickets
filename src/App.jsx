// import { useState } from 'react'
import Footer from './components/Footer'
import { TicketInfo } from './components/TicketInfo'
import { TicketList } from './components/TicketList'
import './styles/App.css'

function App() {
  return (
    <>
    <header>
      <h1>
        Ticket Generator
      </h1>
    </header>
    <div>
      <h5>Generate any kind of ticket everywhere</h5>
    </div>
    <article>
      <div>
        <h2>
          Choose one kind of ticket
        </h2>
        
        <div className='container-tickets'>
          <TicketList />
        </div>
      </div>
    </article>
    <TicketInfo />
    <Footer />
    </>
  )
}

export default App

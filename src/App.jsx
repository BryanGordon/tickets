// import { useState } from 'react'
import Footer from './components/Footer'
import { TicketInfo } from './components/TicketInfo'
import './styles/App.css'

function App() {
  return (
    <>
    <main>
    <header>
      <h1>
        Ticket Generator
      </h1>
    </header>
    <article>
      <div>
        <h2>
          Choose one kind of ticket
        </h2>
      </div>
    </article>
    <TicketInfo />
    </main>
    <Footer />
    </>
  )
}

export default App

import { NavLink } from 'react-router-dom'
import '../styles/AllTicketsList.css'
import { NoItemsList } from './NoItemsList'
import { useState } from 'react'
import { useEffect } from 'react'

export function AllTicketsList () {
  const [tickets, setTickets] = useState([])
  // const empty = false
  /*
  const getTickets = async () => {
    const data = await fetch("http://localhost:3000/get-all-tickets")
    .then(res => res.json)

    setTickets(data)
  }
*/
  useEffect(() => {
    console.log("Execute")
    const getTickets = async () => {
    const data = await fetch("http://localhost:3000/get-all-tickets")
    const res = await data.json()

    const allTickets = [...(res.concert || []), ...(res.movie || []), ...(res.train || [])]

    setTickets(allTickets)
    }
    
    getTickets()
  }, [])

  if (tickets.length === 0) {
    return (
    <>
    <header>
      <div className='back-container'>
        <NavLink to='/'>Go back</NavLink>
      </div>
      </header>
    <NoItemsList />
    </>
    )
  }

  else {
    return (
      <>
        <section>
      <header>
      <div className='back-container'>
        <NavLink to='/'>Go back</NavLink>
      </div>
      </header>
      <article>
        {
          tickets.map((ticket) => (
            <div className='ticket-data-card' key={ticket.number}>
          <div className='info-container'>
            <span>Ticket type: {ticket.type}</span>
            <span>Number: {ticket.number}</span>
          </div>
          <div>
            <span className={ticket.validated ? "validated" : "not-validated"}>{ticket.validated ? 'Validated' : 'Not validated'}</span>  
          </div>
        </div>
          )
          ) 

        }
        {/** 
        <div className='ticket-data-card'>
          <div className='info-container'>
            <span>Ticket type: Train</span>
            <span>Number: 313132</span>
          </div>
          <div>
            <span className='validated'>Validated</span>  
          </div>
        </div>

        <div className='ticket-data-card'>
          <div className='info-container'>
            <span>Ticket type: Train</span>
            <span>Number: 313132</span>
          </div>
          <div>
            <span className='validated'>Validated</span>
          </div>
        </div>

        <div className='ticket-data-card'>
          <div className='info-container'>
            <span>Ticket type: Train</span>
            <span>Number: 313132</span>
          </div>
          <div>
            <span className='validated'>Validated</span>
          </div>
        </div>
        */}
      </article>
    </section>
      </>
    )
  }
}
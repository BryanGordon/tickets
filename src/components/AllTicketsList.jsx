import { NavLink } from 'react-router-dom'
import '../styles/AllTicketsList.css'

export function AllTicketsList () {
  return (
    <section>
      <header>
      <div className='back-container'>
        <NavLink to='/'>Go back</NavLink>
      </div>
      </header>
      <article>
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
      </article>
    </section>
  )
}
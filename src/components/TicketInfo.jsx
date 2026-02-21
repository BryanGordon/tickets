import { useState } from 'react'
import "../styles/TicketInfo.css"

export function TicketInfo () {
  const [ticketData, SetTicketData] = useState("")

  const GenerateConcertTicket = async () => {
    const newTicket = await fetch("http://localhost:3000/concert-tickets", {
      method: "POST",
    })
    .then(res => res.json())
    console.log(newTicket)
    SetTicketData(newTicket)
    // return console.log("Concert ticket")
  }

  const GenerateMoviesTicket = () => {

    return console.log("Movie ticket")
  }

  const GenerateTrainTicket = () => {

    return console.log("Train ticket")
  }
  
  return (
    <>
    <section>
      <article className='container-tickets'>
      <ul>
      <li>
        <button onClick={GenerateConcertTicket}>Concert</button>
      </li>
      <li>
        <button onClick={GenerateMoviesTicket}>Movies</button>
      </li>
      <li>
        <button onClick={GenerateTrainTicket}>Trains</button>
      </li>
    </ul>
    </article>
    </section>
    <section>
      <article>
        <h3>Ticket information</h3>
        <div className='data-format'>
          <strong>Type:</strong>
          <span>{ticketData.number}</span>
        </div>
        <div className='data-format'>
          <strong>Number:</strong>
          <span>42432423432</span>
        </div>
      </article>
    </section>
    </>
  )
}
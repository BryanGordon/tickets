import "../styles/TicketInfo.css"

import { useState } from 'react'
import { toDataURL } from 'qrcode'
import { NavLink } from 'react-router-dom'
import { NoTickectInfo } from './NoTicketInfo'

export function TicketInfo () {
  const hostBack = import.meta.env.VITE_SERVER_BACK
  const host = import.meta.env.VITE_SERVER_HOST
  const [ticketData, SetTicketData] = useState("")
  const [empty, setEmpty] = useState(true)
  const [qrImage, setQrImage] = useState("")

  const GenerateConcertTicket = async () => {
    const newTicket = await fetch(`${hostBack}/concert-tickets`, {
      method: "POST",
    })
    .then(res => res.json())
    SetTicketData(newTicket)
    
    const newQR = await toDataURL(`${host}validation/${newTicket.id}`)
    setQrImage(newQR)
    setEmpty(false)
  }

  const GenerateMoviesTicket = async () => {
    const newTicket = await fetch(`${hostBack}/movies-tickets`, {
      method: "POST",
    })
    .then(res => res.json())
    SetTicketData(newTicket)
    
    const newQR = await toDataURL(`${host}validation/${newTicket.id}`)
    setQrImage(newQR)
    setEmpty(false)
  }

  const GenerateTrainTicket = async () => {
    const newTicket = await fetch(`${hostBack}/train-tickets`, {
      method: "POST"
    })
    .then(res => res.json())
    SetTicketData(newTicket)
    
    const newQR = await toDataURL(`${host}validation/${newTicket.id}`)
    setQrImage(newQR)
    setEmpty(false)
  }

  if (empty == true) {
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
          <div className='list-tickets-link'>
            <NavLink to='/tickets-list'>See all tickets.</NavLink>
          </div>
        </section>
        <NoTickectInfo />
      </>
    )
  }

  else {
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
          <div className='list-tickets-link'>
            <NavLink to='/tickets-list'>See all tickets.</NavLink>
          </div>
        </section>
        <section>
          <article className='ticket-card'>
            <h3>Ticket information</h3>
            <div className='data-format'>
              <span>{ticketData.type} ticket</span>
            </div>
            <div className='img-container'>
              <img src={qrImage} alt="QR image" />
            </div>
            <div className='data-format'>
              <strong>Number:</strong>
              <span>{ticketData.number}</span>
            </div>
          </article>
        </section>
      </>
    )
  }

}
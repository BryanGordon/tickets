import "../styles/TicketInfo.css"

export function TicketInfo () {
  return (
    <section>
      <article>
        <h3>Ticket information</h3>
        <div className='data-format'>
          <strong>Type:</strong>
          <span>Concert</span>
        </div>
        <div className='data-format'>
          <strong>Number:</strong>
          <span>42432423432</span>
        </div>
      </article>
    </section>
  )
}
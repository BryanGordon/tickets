import { TicketInfo } from './TicketInfo'

export function Generator () {
  return (
    <section>
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
    </section>
  )
}
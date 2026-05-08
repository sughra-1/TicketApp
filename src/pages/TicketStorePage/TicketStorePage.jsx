import "./TicketStorePage.css";
import useTicketStore from "../../Store/useTicketStore.js";
import { ArrowLeft } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export default function TicketStorePage() {
  const tickets = useTicketStore((state) => state.tickets);
  const navigate = useNavigate();

  return (
    <div className="receipt__container">
      <div className="receipt__titleline">
        <button className="receipt__backarrow" onClick={() => navigate("/events")} aria-label="Gå tillbaka till events">
          <ArrowLeft size={38} color="#ffffff" />
        </button>
        <h2 className="receipt__title">Bekräftade biljetter</h2>
      </div>

      <div className="receipt__scroll-area">
      {tickets.length === 0 ? (
        <p className="receipt__default-msg">Du har inga bekräftade biljetter</p>
      ) : (
        tickets.map((ticket) => {
          const { event } = ticket;
          const dateParts = event.when?.date?.split(' ') ?? [];
          const day = dateParts[0] ?? '';
          const month = (dateParts[1] ?? '').slice(0, 3).toUpperCase();

          return (
            <div key={ticket.id} className="receipt__ticket-page">
            <div className="receipt__page">
              <div className="receipt__title-wrapper">
                <p className="receipt__line">WHAT</p>
                <h3 className="receipt__event-name">{event.name}</h3>
              </div>
              <div className="receipt__where">
                <p className="receipt__line2">WHERE</p>
                <h3 className="receipt__event-venue">{event.where}</h3>
              </div>
              <div className="receipt__line3">
                <div className="receipt__col-1">
                  <span className="receipt__label">WHEN</span>
                  <p className="receipt__when">{day} {month}</p>
                </div>
                <div className="receipt__col receipt__col--border">
                  <span className="receipt__label">FROM</span>
                  <p className="receipt__from">{event.when.from}</p>
                </div>
                <div className="receipt__col receipt__col--border">
                  <span className="receipt__label">TO</span>
                  <p className="receipt__to">{event.when.to}</p>
                </div>
              </div>
              <div className="receipt__line4">
                <span className="receipt__label">INFO</span>
                <div className="receipt__section-info">{event.info}</div>
              
              
                <div className="receipt__col-2">
                  <span className="receipt__label-section">Section</span>
                  <p className="receipt__section">{ticket.section}</p>
                
                {/* <div className="receipt__col receipt__col--border"> */}
                  <span className="receipt__label-seat"> - Seat</span>
                  <p className="receipt__seat">{ticket.seat}</p>
                {/* </div> */}
                </div>
                </div>
              
              <div className="receipt__barcode-wrapper">
                <p className="receipt__barcode">{ticket.id}</p>
                <p className="receipt__barcode-id">#{ticket.id}</p>
              </div>
            </div>
            </div>
          );
        })
      )}
      </div>
    </div>
  );
}

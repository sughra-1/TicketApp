import { ArrowLeft, Minus, Plus } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import useCartStore from "../../Store/useCartStore";
import useTicketStore from "../../Store/useTicketStore";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector.jsx";
import "./OrderPage.css"

export default function OrderPage() {
  const navigate = useNavigate();
  const cartEvents = useCartStore((state) => state.cartEvents);
  const updateCount = useCartStore((state) => state.updateCount);
  const clearCart = useCartStore((state) => state.clearCart);
  const addTickets = useTicketStore((state) => state.addTickets);

  function handleOrder() {
    cartEvents.forEach(({ event, count }) => addTickets(event, count));
    clearCart();
    navigate("/tickets");
  }

  const grandTotal = cartEvents.reduce((sum, { event, count }) => sum + event.price * count, 0);

  return (
    <div className="orderpage__container">
      <div className="orderpage__title-row">
        <div className="orderpage__backarrow" onClick={() => navigate("/events")}>
          <ArrowLeft size={38} color="#ffffff" />
        </div>
        <h2 className="orderpage__title">order</h2>
      </div>

      {cartEvents.length === 0 ? (
        <p className="orderpage__empty">Finns ingen order</p>
      ) : (
        <>
          {cartEvents.map(({ event, count }) => {
            const [day, monthSv] = event.when.date.split(' ');
            const month = monthSv.slice(0, 3).toUpperCase();

            return (
              <div key={event.id} className="orderpage__list-border">
                <div className="orderpage__event-info">
                  <h2 className="eventdetail__event-name">{event.name}</h2>
                  <p className="eventdetail__event-time">{day} {month} {event.when.from} - {event.when.to}</p>
                </div>
                <div className="quantityselector__buttons">
                  <button className="quantityselector__minus-btn" onClick={() => updateCount(event.id, -1)}>
                    <Minus size={40} />
                  </button>
                  <p className="quantityselector__number">{count}</p>
                  <button className="quantityselector__plus-btn" onClick={() => updateCount(event.id, 1)}>
                    <Plus size={40} />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="orderpage__price-container">
            <p className="quantityselector__price-text">Totalt värde på order</p>
            <p className="quantityselector__price-total">{grandTotal} sek</p>
          </div>
          <SubmitButton label="Skicka Order" onClick={handleOrder}/>
        </>
      )}
    </div>
  );
}

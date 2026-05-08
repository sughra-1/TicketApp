import { useNavigate } from "react-router-dom";
import "./EventDetailPage.css";
import EventDetails from "../../components/EventDetails/EventDetails.jsx";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector.jsx";
import SubmitButton from "../../components/SubmitButton/SubmitButton.jsx";
import useSelectedEventStore from "../../Store/useSelectedEventStore.js";
import useCountStore from "../../Store/useCountStore.js";
import useCartStore from "../../Store/useCartStore.js";
import { ArrowLeft } from "phosphor-react";

export default function EventDetailPage() {
  const navigate = useNavigate();
  const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);
  const addToCart = useCartStore ((state) => state.addToCart);
  const { count, reset } = useCountStore((state) => state);

  return (
    <div className="eventdetailpage__container">
    <div className="eventdetailpage__title-row">
        <button className="eventdetailpage__backarrow" onClick={() => navigate("/events")} aria-label="Gå tillbaka till events">
          <ArrowLeft size={38} color="#ffffff" />
        </button>
        <h1 className="eventdetailpage__title">Event</h1>
      </div>
      {/* <div>
            <h1 className="eventdetailpage__title">
                Event
            </h1>
        </div> */}
        <div className="eventdetailpage__text">
            <p>You are about to score</p>
            <p>some tickets to</p>
        </div>
      <EventDetails/>
      <p className="eventdetailpage__event-venue">@{selectedEvent?.where}</p>
        
      <QuantitySelector/>
      <SubmitButton label="Lägg i varukorgen" onClick={() => {
        addToCart(selectedEvent, count);
        reset();
        navigate("/order");
      }} />
    </div>
  )
}

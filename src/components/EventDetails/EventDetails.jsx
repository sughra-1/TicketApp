import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSelectedEventStore from "../../Store/useSelectedEventStore";
import "./EventDetails.css";

export default function EventDetails() {
    const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);
    const navigate = useNavigate();

    useEffect(() => {
        if (!selectedEvent) navigate("/events")
    }, [selectedEvent])

    if (!selectedEvent) return null

    const [day, monthSv] = selectedEvent.when.date.split(' ');
    const month = monthSv.slice(0, 3).toUpperCase();
  return (
    <div className="eventdetails__container">
        {/* <div>
            <h1 className="eventdetaild__title">
                Event
            </h1>
        </div>
        <div className="eventdetail__text">
            <p>You are about to score</p>
            <p>some tickets to</p>
        </div> */}
        <h2 className="eventdetail__event-name">{selectedEvent.name}</h2>
        <h3 className="eventdetail__event-time">{day} {month} kl {selectedEvent.when.from} - {selectedEvent.when.to}</h3>
       
        
    </div>
  )
}

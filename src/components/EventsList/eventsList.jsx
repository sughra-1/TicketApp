import "./EventsList.css";
import { useNavigate } from "react-router-dom";
import useEvents from "../../hooks/useEvents";
import useSelectedEventStore from "../../Store/useSelectedEventStore";
import { motion } from "framer-motion"

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" }
  })
}

function EventItem({ event, index }) {
  const navigate = useNavigate();
  const setSelectedEvent = useSelectedEventStore((state) => state.setSelectedEvent);

  const [day, monthSv] = event.when.date.split(' ');
  const month = monthSv.slice(0, 3).toUpperCase();

  function handleClick(){
    setSelectedEvent(event)
    navigate("/event")
  }

  return (
    <motion.div
      className="eventlist__item"
      onClick={handleClick}
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="eventlist__item-date">
        <span className="eventlist__item-day">{day}</span>
        <span className="eventlist__item-month">{month}</span>
      </div>
      <div className="eventlist__item-info">
          <h2 className="eventlist__item-name">{event.name}</h2>
          <p className="eventlist__item-venue">{event.where}</p>
          <div className="eventlist__item-bottom">
            <span className="eventlist__item-time">{event.when.from} - {event.when.to}</span>
            <span className="eventlist__item-price">{event.price} sek</span>
          </div>
        <div className="eventlist__item-divider" />
      </div>
    </motion.div>
  )
}

export default function EventsList() {

  const {events, loading, error} = useEvents();

  if (loading) return <p className="eventslist__status">Loading...</p>
  if (error) return <p className="eventslist__status">Error: {error}</p>

  return (
    <div className="events-list">
      {events.map((event, index) =>(
        <EventItem key={event.id} event={event} index={index} />
      ))}
    </div>
  )
}

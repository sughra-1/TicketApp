import "./eventPage.css"
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import EventsList from "../../components/EventsList/eventsList.jsx";
import Header from "../../components/Header/Header.jsx";

export default function EventsPage() {
  return (
    <div className="eventspage__container">
      <div className="eventspage__row">
        <h1 className="eventspage__title">Events</h1>
        <Header/>

      </div>
      <SearchBar/>
      <EventsList/>
    </div>
  )
}

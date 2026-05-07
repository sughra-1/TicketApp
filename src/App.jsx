import { Routes, Route, Navigate} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import EventsPage from "./pages/EventsPage/EventsPage.jsx";
import OrderPage from "./pages/OrderPage/OrderPage.jsx";
import TicketStorePage from "./pages/TicketStorePage/TicketStorePage.jsx";
import EventDetailPage from "./pages/EventDetailPage/EventDetailPage.jsx";


export default function App() {
  

  return (
    <>
    <Routes>
      <Route element = {<Layout/>}> 
        <Route  
        path = "/" 
        element = {<HomePage/>} 
        />
        <Route  
        path = "/events" 
        element = {<EventsPage/>} 

        />
        <Route
        path = "/event"
        element = {<EventDetailPage/>}
        />
        <Route  
        path = "/order" 
        element = {< OrderPage/>} 

        />
        <Route  
        path = "/tickets" 
        element = {<TicketStorePage/>} 

        />
        <Route  
        path = "*" 
        element = {< Navigate to ="/" />} 

        />
      
   
      </Route>

    </Routes>
    
    
  </>
      )
}


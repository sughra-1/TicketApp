import { ShoppingCart, Ticket } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./Header.css"

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header__container">
        <button className="header__shoppingcart" onClick={() => navigate("/order")} aria-label="Gå till varukorg">
          <ShoppingCart size={38} color="#ffffff" />
        </button>
        <button className="header__ticket" onClick={() => navigate("/tickets")} aria-label="Gå till mina biljetter">
          <Ticket size={38} color="#ffffff" />
        </button>
    </div>
  )
}

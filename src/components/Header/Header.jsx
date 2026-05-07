import { ShoppingCart, Ticket } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import "./Header.css"

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="header__container">
        <div className="header__shoppingcart" onClick={() => navigate("/order")}>
          <ShoppingCart size={38} color="#ffffff" />
        </div>
        <div className="header__ticket" onClick={() => navigate("/tickets")}>
          <Ticket size={38} color="#ffffff" />
        </div>
    </div>
  )
}

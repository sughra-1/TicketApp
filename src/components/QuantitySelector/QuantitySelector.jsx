import "./QuantitySelector.css";
import useCountStore from "../../Store/useCountStore";
import useSelectedEventStore from "../../Store/useSelectedEventStore";
import { Minus, Plus } from "phosphor-react";

export default function QuantitySelector({ showPrice = true }) {
    const { count, increment, decrement } = useCountStore();
    const selectedEvent = useSelectedEventStore((state) => state.selectedEvent);

    const totalPrice = selectedEvent ? selectedEvent.price * count : 0;

  return (
    <div className="quantityselector__container">
        {showPrice && (
          <p className="quantityselector__price">{totalPrice} sek</p>
        )}
        <div className="quantityselector__buttons">
            <button className="quantityselector__minus-btn" onClick={decrement}>
                    <Minus size={40}/>
            </button>
            <p className="quantityselector__number">{count}</p>
            <button className="quantityselector__plus-btn" onClick={increment}>
                    <Plus size={40}/>
            </button>
        </div>
        
    </div>
  )
}

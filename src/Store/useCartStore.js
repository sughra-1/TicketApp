import { create } from "zustand";

const useCartStore = create ((set) => ({
    cartEvents: [],
    addToCart : (event, count) => set ((state)=>{
        const existing = state.cartEvents.find(item => item.event.id === event.id);
        if (existing){
            return{
                cartEvents : state.cartEvents.map(item =>
                    item.event.id ===event.id ? {...item, count} : item)
            };
        }
        return {
            cartEvents: [...state.cartEvents, {event, count}]
        }
    }),
    updateCount: (eventId, delta) => set((state) => ({
        cartEvents: state.cartEvents.map(item =>
            item.event.id === eventId
                ? { ...item, count: Math.max(0, item.count + delta) }
                : item
        )
    })),
    clearCart: () => set({ cartEvents: [] }),
}));

export default useCartStore;
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const SECTIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

function getSectionForEvent(eventId) {
    const num = parseInt(String(eventId).replace(/\D/g, ''), 10) || 0;
    return SECTIONS[num % SECTIONS.length];
}

const useTicketStore = create((set) => ({
    tickets: [],
    addTickets: (event, count) => set((state) => {
        const existingForEvent = state.tickets.filter(t => t.event.id === event.id).length;
        const section = getSectionForEvent(event.id);
        const newTickets = Array.from({ length: count }, (_, i) => ({
            id: uuidv4().replace(/-/g, '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 5).toUpperCase(),
            event,
            section,
            seat: existingForEvent + i + 1,
        }));
        return { tickets: [...state.tickets, ...newTickets] };
    }),
    clearTickets: () => set({ tickets: [] }),
}));

export default useTicketStore;

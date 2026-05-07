import { create } from "zustand";

const useSelectedEventStore = create((set) => ({
    selectedEvent: null,
    setSelectedEvent: (event) => set ({selectedEvent: event})
}))

export default useSelectedEventStore
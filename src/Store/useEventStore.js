import { create } from 'zustand';


const useEventStore = create ((set) => ({
    events : [],
    loading : false,
    error : null,
    setEvents : (events) => set ({events}),
    setLoading : (loading) => set({loading}),
    setError : (error) => set({error}),

}))

export default useEventStore
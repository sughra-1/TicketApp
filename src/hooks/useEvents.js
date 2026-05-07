import { useEffect } from "react";
import axios from "axios";
import useEventStore from "../store/useEventStore";

const API_URL = "https://santosnr6.github.io/Data/events.json"

export default function useEvents() {
    const {events, loading, error, setEvents, setLoading, setError} = useEventStore();

    useEffect(() =>{
        if (events.length > 0) return
        setLoading(true)
        axios.get(API_URL)
            .then(res => {
                const data = res.data
                setEvents(Array.isArray(data) ? data : data.events)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, []);
    return { events, loading, error }
}

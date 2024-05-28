import { useContext, useRef, useState } from "react";
import { ContextManager } from "@/app/context/appContext";
import { createEventRequest } from "@/app/utils/requests";

const CreateEvent = () => {
    const {setAddEvent, setAddEventTrigger} = useContext(ContextManager);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const eventRef = useRef();

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await createEventRequest({title: eventRef.current.value});
        if (response.status === 201) {
            setSuccess("Event created successful");
            eventRef.current.value = "";
            setAddEventTrigger(prev => !prev);
            setTimeout(() => {
                setSuccess("");
                setAddEvent(false);
            }, 2000);
            return
        }

        setError("Event creation failed");
        setTimeout(() => {
            setError("");
        }, 2000);
    }
    return (
        <form onSubmit={onSubmit} className="w-72 h-60 bg-white p-3 rounded-md flex flex-col gap-5 ">
            {error && <p className="text-red-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-red-200">{error}</p>}
            {success && <p className="text-green-700 w-full h-14 font-semibold rounded-sm flex items-center justify-center bg-green-200">{success}</p>}
            <p>Create Event</p>
            <input ref={eventRef} className="outline-none w-full h-14 border rounded-sm px-5" placeholder="Event Name" type="text" required />
            <div className="flex gap-2">
                <button onClick={() => {setAddEvent(false)}} type="button" className="border w-full rounded-md">Close</button>
                <button className="text-white bg-secondary rounded-md w-full py-2">Create</button>
            </div>
            
        </form>
    )
}

export default CreateEvent;
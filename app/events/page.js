"use client";
import Header from "../components/header/header";
import CreateEvent from "../components/forms/createEvent";
import { useContext, useEffect, useState } from "react";
import { ContextManager } from "../context/appContext";
import DataTable from "../components/tables/DataTable";
import eventColumns from "../components/tables/eventsTableColumns";
import axiosInstance from "../utils/axiosConfig";


const Page = () => {
    const {addEvent, setAddEvent, addEventTrigger} = useContext(ContextManager);
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/events");
                setEventsData(response?.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [addEventTrigger]);

    return (
        <div className="flex flex-col gap-5 min-h-screen">
            <Header />
            <div className="px-5 py-5 flex flex-col gap-8 lg:gap-5 lg:px-20">
                <div className="w-full h-auto flex flex-col gap-3  justify-between relative lg:items-center lg:flex-row">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-lg">Kithima Kirithiria Events</h1>
                    </div>
                    <button onClick={() => {setAddEvent(true)}} className="px-6 py-2 rounded-full bg-secondary text-white">Create New Event</button>
                    {
                        addEvent && <div className="absolute top-0 right-0 z-50">
                            <CreateEvent />
                        </div>
                    }
                </div>
                <div>
                    <DataTable rows={eventsData} columns={eventColumns} />
                </div>
            </div>
        </div>
    )
}

export default Page;
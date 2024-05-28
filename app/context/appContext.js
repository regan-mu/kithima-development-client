"use client";
import {createContext, useState } from "react";

export const ContextManager = createContext();

export const ContextProvider  = ({children}) => {
    const [addEvent, setAddEvent] = useState(false);
    const [addContribution, setAddContribution] = useState(false);
    const [addMember, setAddMember] = useState(false);
    const [addEventTrigger, setAddEventTrigger] = useState(false);
    return (
        <ContextManager.Provider
            value = {{
                addEvent,
                setAddEvent,
                addContribution,
                setAddContribution,
                addMember,
                setAddMember,
                addEventTrigger,
                setAddEventTrigger
            }}
        >
            {children}
        </ContextManager.Provider>
    );
}

export const ContextWrapper = ({children}) => {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    )
}
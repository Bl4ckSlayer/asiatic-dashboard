import React, { createContext, useEffect, useState } from "react";

// Create the context
export const TicketContext = createContext();

// Create a custom provider component
export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(() => {
    return JSON.parse(localStorage.getItem("tickets")) || [];
  });

  // Update local storage whenever tickets change
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <TicketContext.Provider value={{ tickets, setTickets }}>
      {children}
    </TicketContext.Provider>
  );
};

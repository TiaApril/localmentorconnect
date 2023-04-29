import React, {Children, useContext, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [location, setLocation] = useState({})

    const openDashboard = (coordinates) => {
        setLocation(coordinates)
        setIsDashboardOpen(true)
    }

    const closeDashboard = () => {
        setIsDashboardOpen(false)
    }

    return (
        <AppContext.Provider value={{
            isDashboardOpen,
            openDashboard,
            closeDashboard,
            location
        }}>
            {children}
        </AppContext.Provider>
    )
    
}

export {AppContext, AppProvider}
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const handle_click = () =>{
        setShow(!show)
    }
    const [showcart, setShowcart] = useState(false)
    const handle_click_cart = () =>{
        setShowcart(!showcart)
    }
    const [shownav, setShownav] = useState(false)
    const handle_click_menu = () =>{
        setShownav(!shownav)
    }
    return (
        <AppContext.Provider value={{ handle_click, show, setShow, handle_click_cart,  showcart, setShowcart, handle_click_menu, shownav, setShownav}}>
            {children}
        </AppContext.Provider>
    )

}
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
    return (
        <AppContext.Provider value={{ handle_click, show, setShow, handle_click_cart,  showcart, setShowcart}}>
            {children}
        </AppContext.Provider>
    )

}
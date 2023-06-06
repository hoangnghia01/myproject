import { createContext, useState, useEffect } from "react";

export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const handle_click = () =>{
        setShow(!show)
    }
    const handle_click_close =()=>{
        setShow(false)
    }
    const [showcart, setShowcart] = useState(false)
    const handle_click_cart = () =>{
        setShowcart(!showcart)
    }
    const handle_click_cart_close =()=>{
        setShowcart(false)
    }
    const [shownav, setShownav] = useState(false)
    const handle_click_menu = () =>{
        setShownav(!shownav)
    }
  const close_menu =() =>{
    setShownav(false)
  }
    return (
        <AppContext.Provider value={{ handle_click,handle_click_close, show, setShow, handle_click_cart,handle_click_cart_close,  showcart, setShowcart, handle_click_menu,close_menu, shownav, setShownav}}>
            {children}
        </AppContext.Provider>
    )

}
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ChatContext = createContext();

export const ChatProvider = ({children})=>{
    // const navigate = useNavigate()
    // const [value,setValue] = useState("Hello World");
    // useEffect(()=>{
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //     setUser(userInfo)
    //     if(!userInfo){
    //         navigate("/")
    //     }
    // },[navigate])
    return <ChatContext.Provider value={{value}}>{children}</ChatContext.Provider>
}

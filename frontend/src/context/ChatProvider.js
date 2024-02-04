import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


export const ChatContext = createContext();

export const ChatProvider = ({children})=>{
    // const navigate = useNavigate()
    const [user,setUser] = useState();
   
    useEffect(()=>{
        console.log("hello")
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo)
        // if(!userInfo){
        //     navigate("/")
        // }
    },[])
    return <ChatContext.Provider value={{user,setUser}}>{children}</ChatContext.Provider>
}

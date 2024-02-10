import React, { useContext, useState } from 'react'
import styles from "./ChatPage.module.css"
import Header from '../../components/Header/Header'
import MyChats from '../../components/Chat/MyChat'
import { ChatContext } from '../../context/ChatProvider'
import { Box } from '@chakra-ui/react'
import ChatBox from '../../components/Chat/ChatBox'

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const {user} = useContext(ChatContext)
  
  return (
    <div className={styles.fadein}>
      <div>
      <div style={{ width: "100%" }}>
      {user && <Header />}
      <Box display="flex" justifyContent="space-between" w="75%" h="91.5vh" p="10px" margin={"auto"}>
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        )}
        
      </Box>
    </div>
      </div>
    </div>
  )
}

export default ChatPage
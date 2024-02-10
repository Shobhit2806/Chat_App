import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatProvider';
import SingleChat from './SingleChat';

const ChatBox = ({fetchAgain,setFetchAgain}) => {
  const { selectedChat, setSelectedChat, user, chats, setChats } =
  useContext(ChatContext);
  return (
    <Box
    display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
    flexDirection="column"
    alignItems="center"
    p={3}
    bg="white"
    w={{ base: "100%", md: "74%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
    <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
    </Box>
  )
}

export default ChatBox
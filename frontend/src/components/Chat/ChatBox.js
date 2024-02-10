import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatProvider';

const ChatBox = () => {
  const { selectedChat, setSelectedChat, user, chats, setChats } =
  useContext(ChatContext);
  return (
    <Box
    display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
    flexDirection="column"
    alignItems="center"
    p={3}
    bg="white"
    w={{ base: "100%", md: "74%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
    Hi
    </Box>
  )
}

export default ChatBox
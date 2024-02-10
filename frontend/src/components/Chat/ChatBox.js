import { Box } from '@chakra-ui/react'
import React from 'react'

const ChatBox = () => {
  return (
    <Box
    // display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
    flexDirection="column"
    alignItems="center"
    p={3}
    bg="white"
    w={{ base: "100%", md: "68%" }}
    borderRadius="lg"
    borderWidth="1px"
  >
    Hi
    </Box>
  )
}

export default ChatBox
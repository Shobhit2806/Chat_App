import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatContext } from "../context/ChatProvider";
const Header = () => {
  const {user } = useContext(ChatContext);
  return (
    <div>
      <Box
        bg="white"
        borderWidth="5px"
        w="100%"
        h="9vh"
        p="5px 10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Tooltip label="Search users to chat">
          <Button variant="ghost">
            <i class="fas fa-search"></i>
            <Text px={2} display={{ base: "none", md: "flex" }}>
              Search user to chat
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl">Conversify</Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Menu>
            <MenuButton p={1}>
              <IconButton
                display="flex"
                alignItems="center"
                m={1}
                alignContent={"center"}
                aria-label="Search database"
                icon={<BellIcon />}
              />
              {/* <MenuList></MenuList> */}
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              p={1}
              as={Button}
              bg="white"
              rightIcon={<ChevronDownIcon />}
            >
              <IconButton
                display="flex"
                bg="none"
                alignItems="center"
                m={1}
                alignContent={"center"}
                aria-label="Search database"
                icon={
                  <Avatar
                    size="sm"
                    cursor="pointer"
                    name={user.name}
                    src={user.pic}
                  />
                }
              />
            </MenuButton>
          </Menu>
        </div>
      </Box>
    </div>
  );
};

export default Header;

import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatContext } from "../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import {  useNavigate } from "react-router-dom";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const { user } = useContext(ChatContext);
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout =()=>{
    localStorage.removeItem("userInfo")
    // navigate("/auth")
  }

  return (
    <div>
      <Box
        bg="white"
        borderWidth="5px"
        borderColor={"#6b81fa"}
        w="100%"
        h="9vh"
        p="5px 10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Tooltip label="Search users to chat">
          <Button variant="ghost" onClick={onOpen}>
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
                    name={user?.name}
                    src={user?.pic}
                  />
                }
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem fontSize={"xl"}>My Profile</MenuItem>{" "}
              </ProfileModal>
              <MenuDivider />
              <MenuItem fontSize={"xl"} onClick={()=>handleLogout()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <SideDrawer onClose={onClose} isOpen={isOpen}/>
    </div>
  );
};

export default Header;

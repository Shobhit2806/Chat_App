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
import { ChatContext } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
import SideDrawer from "./SideDrawer/SideDrawer";
import { getSender } from "../../config/ChatLogics";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

const Header = () => {
  const { user, notification, setNotification, selectedChat, setSelectedChat } =
    useContext(ChatContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/auth");
  };
  const handleNotification = (e, notif) => {
    e.stopPropagation();
    console.log("kdnlksdn");
    setSelectedChat(notif.chat);
    setNotification(notification.filter((n) => n !== notif));
  };
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
              <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
                style={{zIndex:"1"}}
              />

              <IconButton
                display="flex"
                alignItems="center"
                m={1}
                alignContent={"center"}
                aria-label="Search database"
                icon={<BellIcon />}
              />
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No New Messages"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={(e) => handleNotification(e, notif)}
                >
                  {notif.chat.isGroupChat
                    ? `New Messages in ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
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
              <MenuItem fontSize={"xl"} onClick={() => handleLogout()}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <SideDrawer onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Header;

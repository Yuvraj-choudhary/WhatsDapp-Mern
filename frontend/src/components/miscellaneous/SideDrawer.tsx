import { useDisclosure } from "@chakra-ui/hooks";
import {
  BellIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Search2Icon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import NotificationBadge, { Effect } from "react-notification-badge";
import { useHistory } from "react-router-dom";
import { getSender } from "../../config/ChatLogics";
import { ChatState } from "../../context/ChatProvider";
import ChatLoading from "../ChatLoading";
import Moon from "../icons/Moon";
import UserListItem from "../userStufs/UserListItem";
import Chatdapp from "./Chatdapp";
import ProfileModel from "./ProfileModel";
import SearchModal from "./SearchModal";

const SideDrawer = ({ isHidden, setIsHidden }) => {
  const [search, setSearch]: any = useState("");
  const [searchResult, setSearchResult]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [loadingChat, setLoadingChat]: any = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    setNotification,
    notification,
    selectedChat,
  }: any = ChatState();
  const history = useHistory();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error: any) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      {!isHidden ? (
        <Box d={isHidden ? "none" : "flex"}>
          <Box
            justifyContent="space-between"
            alignItems="center"
            bg={colorMode === "dark" ? "#2d3748" : "white"}
            w="100%"
            p="5px 10px 5px 10px"
            borderWidth="5px"
            borderColor={colorMode === "dark" ? "#232b38" : "#e5e7eb"}
            d={{ base: !selectedChat ? "flex" : "none", xl: "flex" }}
          >
            <Box>
              <Tooltip
                label="Search Users to chats"
                hasArrow
                placement="bottom-end"
              >
                <Button variant="outline" onClick={onOpen} mr={2}>
                  <Search2Icon />
                  <Text d={{ base: "none", md: "flex" }} pl="4" pr="1">
                    Search Users
                  </Text>
                </Button>
              </Tooltip>
              <IconButton
                aria-label="hi"
                icon={<ChevronDownIcon fontSize="2xl" />}
                variant="outline"
                onClick={() => {
                  setIsHidden(true);
                  localStorage.setItem("hidden", JSON.stringify(isHidden));
                }}
              />
            </Box>
            <Chatdapp>
              <Button
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="Nunito"
                d={{ base: "none", md: "flex" }}
                variant="outline"
              >
                Chat Dapp
              </Button>
            </Chatdapp>
            <Box>
              <IconButton
                onClick={() => toggleColorMode()}
                aria-label="mode"
                mr={2}
                variant="outline"
              >
                {colorMode === "dark" ? (
                  <SunIcon fontSize="xl" m={1} />
                ) : (
                  <Moon />
                )}
              </IconButton>
              <Menu>
                <MenuButton p={1} as={Button} mr={2} variant="outline">
                  <NotificationBadge
                    count={notification.length}
                    effect={Effect.SCALE}
                  />
                  <BellIcon fontSize="2xl" m={1} />
                </MenuButton>

                <MenuList p={2}>
                  {!notification.length && "No New Messages"}
                  {notification.map((notif: any) => (
                    <MenuItem
                      key={notif._id}
                      onClick={() => {
                        setSelectedChat(notif.chat);
                        setNotification(
                          notification.filter((n) => n !== notif)
                        );
                      }}
                    >
                      {notif.chat.isGroupChat
                        ? `New Message in ${notif.chat.chatName}`
                        : `New Message from ${getSender(
                            user,
                            notif.chat.users
                          )}`}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant="outline"
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      size={"sm"}
                      cursor="pointer"
                      name={user.name}
                      src={user.pic}
                    />
                  </Box>
                </MenuButton>
                <MenuList>
                  <ProfileModel user={user}>
                    <MenuItem>My Profile</MenuItem>
                  </ProfileModel>
                  <MenuDivider />
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                  <MenuDivider />
                  <SearchModal>
                    <MenuItem>Search Web</MenuItem>
                  </SearchModal>
                </MenuList>
              </Menu>
            </Box>
          </Box>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xl">
            <DrawerOverlay bg="none" backdropFilter="auto" backdropBlur="5px" />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>

              <DrawerBody>
                <Box d="flex" pb={2}>
                  <Input
                    placeholder="Search by name or email"
                    mr={2}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button variant="outline" onClick={handleSearch}>
                    Go
                  </Button>
                </Box>
                {loading ? (
                  <ChatLoading />
                ) : (
                  searchResult?.map((userFilter: any) => (
                    <UserListItem
                      key={userFilter._id}
                      user={userFilter}
                      handleFunction={() => accessChat(userFilter._id)}
                    />
                  ))
                )}
                {loadingChat && <Spinner ml="auto" d="flex" />}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : (
        <Box
          d={{ base: !selectedChat ? "flex" : "none", xl: "flex" }}
          justifyContent="center"
          onClick={() => {
            setIsHidden(false);
          }}
        >
          <ChevronUpIcon fontSize={25} cursor="pointer" />
        </Box>
      )}
    </>
  );
};

export default SideDrawer;

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
  Hide,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
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
import "../styles.css";
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
    setIsLoggedIn,
  }: any = ChatState();
  const history = useHistory();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
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
        <Box display={isHidden ? "none" : "flex"}>
          <Box
            justifyContent="space-between"
            alignItems="center"
            bg={colorMode === "dark" ? "#2d3748" : "white"}
            w="100%"
            p="5px 10px 5px 10px"
            borderWidth="5px"
            borderColor={colorMode === "dark" ? "#232b38" : "#e5e7eb"}
            display={{ base: !selectedChat ? "flex" : "none", xl: "flex" }}
          >
            <Box display="flex">
              <Show below="xl">
                <Tooltip
                  label="Search Users to chats"
                  hasArrow
                  placement="bottom-end"
                >
                  <IconButton
                    variant=""
                    onClick={onOpen}
                    mr={2}
                    display="flex"
                    alignItems="center"
                    aria-label="Search"
                    icon={<Search2Icon />}
                    isRound
                    className="button-inner-effect"
                  />
                </Tooltip>
              </Show>
              <Hide below="xl">
                <Tooltip
                  label="Search Users to chats"
                  hasArrow
                  placement="bottom-end"
                >
                  <Button
                    variant=""
                    onClick={onOpen}
                    mr={2}
                    className="button-inner-effect"
                  >
                    <Search2Icon />
                    <Text display={{ base: "none", md: "flex" }} pl="4" pr="1">
                      Search Users
                    </Text>
                  </Button>
                </Tooltip>
              </Hide>
              <IconButton
                aria-label="hi"
                icon={<ChevronUpIcon fontSize="2xl" />}
                variant=""
                isRound
                onClick={() => {
                  setIsHidden(true);
                }}
                className="button-inner-effect"
              />
            </Box>
            <Chatdapp>
              <Button
                fontSize="2xl"
                fontWeight="bold"
                fontFamily="Nunito"
                display={{ base: "none", md: "flex" }}
                variant=""
                className="button-inner-effect"
              >
                Chat Dapp
              </Button>
            </Chatdapp>
            <Box>
              <IconButton
                onClick={() => toggleColorMode()}
                aria-label="mode"
                mr={2}
                variant=""
                isRound
                className="button-inner-effect"
              >
                {colorMode === "dark" ? (
                  <SunIcon fontSize="xl" m={1} />
                ) : (
                  <Moon />
                )}
              </IconButton>
              <Menu>
                <MenuButton
                  as={IconButton}
                  mr={2}
                  variant=""
                  isRound
                  className="button-inner-effect"
                >
                  <NotificationBadge
                    count={notification.length}
                    effect={Effect.SCALE}
                    style={{
                      padding: "3.2px 6px",
                      right: "4px",
                      top: "-1px",
                    }}
                  />
                  <BellIcon fontSize="2xl" m={1} />
                </MenuButton>

                <MenuList
                  borderColor="#d3d3d300"
                  borderRadius="33px"
                  boxShadow="2xl"
                  padding={1.5}
                  className="transition-all duration-300 ease-in-out"
                >
                  {!notification.length && (
                    <Text
                      boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                      className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                      display="flex"
                      justifyContent="center"
                      fontFamily="Nunito"
                      p={3}
                      fontSize={18}
                      borderRadius="24px"
                    >
                      No New Messages
                    </Text>
                  )}
                  {notification.map((notif: any) => (
                    <>
                      <MenuItem
                        key={notif._id}
                        onClick={() => {
                          setSelectedChat(notif.chat);
                          setNotification(
                            notification.filter((n) => n !== notif)
                          );
                        }}
                        borderRadius="24px"
                        boxShadow="inset 0 1px 4px 2px rgba(0,0,0,0.1)"
                        className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                        display="flex"
                        justifyContent="center"
                      >
                        <Text fontFamily="Nunito" p={3} fontSize={18}>
                          {notif.chat.isGroupChat
                            ? `New Message in ${notif.chat.chatName}`
                            : `New Message from ${getSender(
                                user,
                                notif.chat.users
                              )}`}
                        </Text>
                      </MenuItem>
                      <MenuDivider marginTop="0.2rem" marginBottom={"0.2rem"} />
                    </>
                  ))}
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={IconButton}
                  variant=""
                  isRound
                  mr={2}
                  className="button-inner-effect"
                >
                  <Avatar
                    size={"sm"}
                    cursor="pointer"
                    name={user.name}
                    src={user.pic}
                  />
                </MenuButton>
                <MenuList
                  borderColor="#d3d3d300"
                  borderRadius="33px"
                  boxShadow="2xl"
                  padding={1.5}
                  className="transition-all duration-300 ease-in-out"
                >
                  <MenuItem
                    borderRadius="24px 24px 0 0"
                    boxShadow="inset 0 1px 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    display="flex"
                    justifyContent="center"
                  >
                    <ProfileModel user={user}>
                      <Box fontFamily="Nunito" p={3} fontSize={18}>
                        My Profile
                      </Box>
                    </ProfileModel>
                  </MenuItem>
                  <MenuDivider marginTop="0.2rem" marginBottom="0.2rem" />
                  <MenuItem
                    boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    display="flex"
                    justifyContent="center"
                  >
                    <Text
                      p={3}
                      fontSize={18}
                      onClick={logoutHandler}
                      fontFamily="Nunito"
                    >
                      Logout
                    </Text>
                  </MenuItem>
                  <MenuDivider marginTop="0.2rem" marginBottom="0.2rem" />
                  <MenuItem
                    borderRadius="0 0 24px 24px"
                    boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                    className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                    display="flex"
                    justifyContent="center"
                  >
                    <SearchModal>
                      <Text p={3} fontSize={18} fontFamily="Nunito">
                        Search Web
                      </Text>
                    </SearchModal>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>

          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xl">
            <DrawerOverlay bg="none" backdropFilter="auto" backdropBlur="6px" />
            <DrawerContent>
              <DrawerCloseButton
                borderRadius="50%"
                fontSize="15px"
                variant=""
              />
              <DrawerHeader
                borderBottomWidth="1px"
                borderColor="rgb(255 255 255 / 0%)"
              >
                Search Users
              </DrawerHeader>

              <DrawerBody>
                <Box display="flex" pb={2}>
                  <Input
                    placeholder="Search by name or email"
                    mr={2}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    borderColor="rgb(255 255 255 / 0%)"
                    boxShadow="inset 0 0 6px 2px rgba(0,0,0,0.2)"
                  />
                  <Button
                    variant=""
                    onClick={handleSearch}
                    className="button-inner-effect"
                  >
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
                {loadingChat && <Spinner ml="auto" display="flex" />}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : (
        <Box
          display={{ base: !selectedChat ? "flex" : "none", xl: "flex" }}
          justifyContent="center"
          onClick={() => {
            setIsHidden(false);
          }}
        >
          <ChevronDownIcon fontSize={25} cursor="pointer" />
        </Box>
      )}
    </>
  );
};

export default SideDrawer;
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    SlideFade,
    Text
} from "@chakra-ui/react";
import {Close, MoreVert, Refresh, VideocamRounded} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { getSender, getSenderFull, getSenderPic } from "../config/ChatLogics";
import ProfileModel from "./miscellaneous/ProfileModel";
import UpdateGroup from "./miscellaneous/UpdateGroup";
import "./styles.css";

const ChatHeader = ({
  colorMode,
  setSelectedChat,
  message,
  user,
  fetchMessages,
  deleteChat,
  fetchAgain,
  setFetchAgain,
  selectedChat,
  isPreview,
  setPic,
  setAudio,
  setVideo,
  setFile,
  setGif,
  pic,
  video,
  file,
  gif,
}:any) => {
  const history = useHistory();

  const formatDate = (date: any) => {
    return date < 10 ? "0" + date : date;
  };
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Text
      fontSize={{
        base: "28px",
        xl: "30px",
      }}
      fontFamily="Nunito"
      pb={3}
      px={2}
      w="100%"
      display="flex"
      alignItems="center"
      bg={colorMode === "dark" ? "#2d3748" : "white"}
    >
      {isPreview ? (
        <SlideFade in={pic || video || file || gif} offsetY="2000px">
          <Box display="flex">
            <IconButton
              icon={<Close />}
              onClick={() => {
                setPic("");
                setVideo("");
                setFile("");
                setGif("");
              }}
              aria-label="back"
              variant=""
              isRound
            />
            <Text fontFamily="Nunito" ml={3}>
              Preview
            </Text>
          </Box>
        </SlideFade>
      ) : (
        <>
          <IconButton
            display={{
              base: "flex",
              xl: "none",
            }}
            mr={2}
            icon={<ArrowBackIcon />}
            onClick={() => {
              setSelectedChat();
              history.push("/@");
            }}
            aria-label="back"
            fontSize="2xl"
            variant=""
            isRound
            className="button-inner-effect"
          />
          {message && (
            <>
              {!selectedChat.isGroupChat ? (
                <ProfileModel user={getSenderFull(user, selectedChat.users)}>
                  <Box
                    display="flex"
                    cursor="pointer"
                    className="button-inner-effect rounded-full"
                  >
                    <Avatar
                      name={getSender(user, selectedChat.users)}
                      src={getSenderPic(user, selectedChat.users)}
                    />
                    <Box>
                      <Text
                        mx={2}
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        maxWidth="fit-content"
                        fontFamily="Nunito"
                        overflow="hidden"
                      >
                        {getSender(user, selectedChat.users)}
                      </Text>
                    </Box>
                  </Box>
                </ProfileModel>
              ) : (
                <UpdateGroup
                  fetchMessages={fetchMessages}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                >
                  <Box display="flex" cursor="pointer">
                    <Avatar
                      name={selectedChat.chatName}
                      src={selectedChat.pic}
                      ml={{
                        base: 3,
                        xl: 0,
                      }}
                    />
                    <Box>
                      <Text
                        ml={2}
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        maxWidth="fit-content"
                        overflow="hidden"
                        fontFamily="Nunito"
                      >
                        {selectedChat.chatName}
                      </Text>
                    </Box>
                  </Box>
                </UpdateGroup>
              )}
              <Box marginLeft="auto" display="flex">
                <IconButton
                  icon={<VideocamRounded />}
                  onClick={() => history.push("/$") }
                  aria-label="refresh"
                  variant=""
                  isRound
                  className="button-inner-effect"
                />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    ml={2}
                    variant=""
                    isRound
                    className="button-inner-effect"
                  >
                    <MoreVert />
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
                      <Text
                        p={4}
                        fontSize={18}
                        onClick={() => deleteChat()}
                        fontFamily="Nunito"
                      >
                        Delete {selectedChat.isGroupChat ? "Group" : "Chat"}
                      </Text>
                    </MenuItem>
                    <MenuDivider marginTop="0.2rem" marginBottom="0.2rem" />
                    {!selectedChat.isGroupChat ? (
                      <MenuItem
                        borderRadius="0 0 24px 24px"
                        boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                        className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                        display="flex"
                        justifyContent="center"
                      >
                        <ProfileModel user={getSenderFull(user, selectedChat.users)}/>
                      </MenuItem>
                    ) : (
                      <MenuItem
                        borderRadius="0 0 24px 24px"
                        boxShadow="inset 0 0 4px 2px rgba(0,0,0,0.1)"
                        className="transition-all duration-1000 ease-in-out hover:shadow-sm"
                        display="flex"
                        justifyContent="center"
                      >
                        <UpdateGroup
                          fetchMessages={fetchMessages}
                          fetchAgain={fetchAgain}
                          setFetchAgain={setFetchAgain}
                          children={null}
                        />
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </Box>
            </>
          )}
        </>
      )}
    </Text>
  );
};

export default ChatHeader;

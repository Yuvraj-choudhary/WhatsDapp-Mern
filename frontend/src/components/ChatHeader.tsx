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
  Text,
} from "@chakra-ui/react";
import { Button } from "@material-ui/core";
import { Close, MoreVert, Refresh } from "@material-ui/icons";
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
}) => {
  const history = useHistory();
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
      d="flex"
      alignItems="center"
      bg={colorMode === "dark" ? "#2d3748" : "white"}
    >
      {isPreview ? (
        <SlideFade in={isPreview} offsetY="2000px">
          <Box d="flex">
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
            d={{
              base: "flex",
              xl: "none",
            }}
            icon={<ArrowBackIcon />}
            onClick={() => {
              setSelectedChat();
              history.push("/@");
            }}
            aria-label="back"
            fontSize="2xl"
            variant=""
            isRound
          />
          {message && (
            <>
              {!selectedChat.isGroupChat ? (
                <ProfileModel user={getSenderFull(user, selectedChat.users)}>
                  <Box d="flex" cursor="pointer">
                    <Avatar
                      name={getSender(user, selectedChat.users)}
                      src={getSenderPic(user, selectedChat.users)}
                      ml={{
                        base: 3,
                        xl: 0,
                      }}
                    />
                    <Text
                      ml={2}
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                      maxWidth="fit-content"
                      fontFamily="Nunito"
                      overflow="hidden"
                    >
                      {getSender(user, selectedChat.users)}
                    </Text>
                  </Box>
                </ProfileModel>
              ) : (
                <UpdateGroup
                  fetchMessages={fetchMessages}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                >
                  <Box  d="flex" cursor="pointer">
                    <Avatar
                      name={selectedChat.chatName}
                      src={selectedChat.pic}
                      ml={{
                        base: 3,
                        xl: 0,
                      }}
                    />
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
                </UpdateGroup>
              )}
              <Box marginLeft="auto" d="flex">
                <IconButton
                  icon={<Refresh />}
                  onClick={() => fetchMessages()}
                  aria-label="refresh"
                  variant=""
                  isRound
                />
                <Menu>
                  <MenuButton as={IconButton} ml={2} variant="" isRound>
                    <MoreVert />
                  </MenuButton>
                  <MenuList
                    borderColor="#d3d3d300"
                    borderRadius="33px"
                    boxShadow="2xl"
                  >
                    <MenuItem borderRadius="24px 24px 0 0">
                      <Text
                        p={5}
                        fontSize={22}
                        onClick={() => deleteChat()}
                        fontFamily="Nunito"
                      >
                        Delete {selectedChat.isGroupChat ? "Group" : "Chat"}
                      </Text>
                    </MenuItem>

                    <MenuDivider />

                    {!selectedChat.isGroupChat ? (
                      <MenuItem borderRadius="0 0 24px 24px">
                        <ProfileModel
                          user={getSenderFull(user, selectedChat.users)}
                          children={null}
                        />
                      </MenuItem>
                    ) : (
                      <MenuItem borderRadius="0 0 24px 24px">
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

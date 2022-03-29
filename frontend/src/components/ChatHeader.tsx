import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  SlideFade,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Close, MoreVert, Refresh } from "@material-ui/icons";
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
  return (
    <Text
      fontSize={{
        base: "28px",
        xl: "30px",
      }}
      pb={3}
      px={2}
      w="100%"
      fontFamily="Nunito"
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
              setAudio("");
              setVideo("");
              setFile("");
              setGif("");
            }}
            aria-label="back"
            variant="outline"
          />
          <Text ml={3}>Preview</Text></Box>
        </SlideFade>
      ) : (
        <>
          <IconButton
            d={{
              base: "flex",
              xl: "none",
            }}
            icon={<ArrowBackIcon />}
            onClick={() => setSelectedChat()}
            aria-label="back"
            variant="outline"
          />
          {message && (
            <>
              {!selectedChat.isGroupChat ? (
                <>
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
                    overflow="hidden"
                  >
                    {getSender(user, selectedChat.users)}
                  </Text>
                </>
              ) : (
                <>
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
                  >
                    {selectedChat.chatName}
                  </Text>
                </>
              )}
              <Box marginLeft="auto" d="flex">
                <IconButton
                  icon={<Refresh />}
                  onClick={() => fetchMessages()}
                  aria-label="refresh"
                  variant="outline"
                />
                <Menu>
                  <MenuButton as={IconButton} ml={2} variant="outline">
                    <MoreVert />
                  </MenuButton>
                  <MenuList>
                    <Tooltip
                      label="Delete the chat"
                      hasArrow
                      placement="bottom-end"
                    >
                      <Text p={5} fontSize={22} onClick={() => deleteChat()}>
                        Delete {selectedChat.isGroupChat ? "Group" : "Chat"}
                      </Text>
                    </Tooltip>

                    <MenuDivider />

                    {!selectedChat.isGroupChat ? (
                      <ProfileModel
                        user={getSenderFull(user, selectedChat.users)}
                        children={null}
                      />
                    ) : (
                      <UpdateGroup
                        fetchMessages={fetchMessages}
                        fetchAgain={fetchAgain}
                        setFetchAgain={setFetchAgain}
                      />
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

import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { getSender, getSenderFull, getSenderPic } from "../config/ChatLogics";
import ProfileModel from "./miscellaneous/ProfileModel";
import UpdateGroup from "./miscellaneous/UpdateGroup";
import "./styles.css";
import { MoreVert, Refresh } from "@material-ui/icons";

const ChatHeader = ({
  colorMode,
  setSelectedChat,
  message,
  user,
  fetchMessages,
  deleteChat,
  fetchAgain,
  setFetchAgain,
  selectedChat
}) => {
  return (
    <Text
      fontSize={{
        base: "28px",
        xl: "30px"
      }}
      pb={3}
      px={2}
      w="100%"
      fontFamily="Nunito"
      d="flex"
      alignItems="center"
      bg={colorMode === "dark" ? "#2d3748" : "white"}
    >
      <IconButton
        d={{
          base: "flex",
          xl: "none"
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
                  xl: 0
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
                  xl: 0
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
    </Text>
  );
};

export default ChatHeader;

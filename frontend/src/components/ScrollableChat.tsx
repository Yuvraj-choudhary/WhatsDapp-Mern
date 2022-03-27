import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import ScrollableFeed from "react-scrollable-feed";
import { isLastMessage, isSameSender } from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";
import MessageLoader from "./MessageLoader";
import MessageReceiver from "./MessageReceiver";
import MessageSender from "./MessageSender";
import "./styles.css";

const ScrollableChat = ({ message, selectedChat, isTyping, deleteMessage }) => {
  const { user }: any = ChatState();

  return (
    <ScrollableFeed
      animateScroll={(element) => {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth",
        });
      }}
      className="px-5"
    >
      {message &&
        message.map((m: any, i: any) => (
          <>
            <div className="message" key={m._id}>
              {(isSameSender(message, m, i, user._id) ||
                isLastMessage(message, i, user._id)) &&
                selectedChat.isGroupChat && (
                  <Tooltip
                    label={m.sender.name}
                    placement="bottom-start"
                    hasArrow
                  >
                    <Avatar
                      mt="35px"
                      mr={1}
                      size="sm"
                      name={m.sender.name}
                      src={m.sender.pic}
                    />
                  </Tooltip>
                )}
              {m.sender._id === user._id ? (
                <MessageSender
                  user={user}
                  deleteMessage={deleteMessage}
                  i={i}
                  m={m}
                  message={message}
                />
              ) : (
                <MessageReceiver
                  user={user}
                  deleteMessage={deleteMessage}
                  i={i}
                  m={m}
                  message={message}
                  selectedChat={selectedChat}
                  isTyping={isTyping}
                />
              )}
            </div>
          </>
        ))}
      {isTyping ? (
        <Box d="flex" alignItems="center">
          <MessageLoader />
        </Box>
      ) : (
        <></>
      )}
      <Box mb="10px"  />
    </ScrollableFeed>
  );
};

export default ScrollableChat;

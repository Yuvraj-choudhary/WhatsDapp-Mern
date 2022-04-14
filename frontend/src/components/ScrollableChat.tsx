import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import {lazy} from "react";
import ScrollableFeed from "react-scrollable-feed";
import { isLastMessage, isSameSender } from "../config/ChatLogics";
import { ChatState } from "../context/ChatProvider";
import MessageLoader from "./MessageLoader";
import "./styles.css";
const MessageReceiver = lazy(() => import("./MessageReceiver"));
const MessageSender = lazy(() => import("./MessageSender"));

const ScrollableChat = ({
  message,
  selectedChat,
  isTyping,
  deleteMessage,
  star,
  setStar,
}) => {
  const { user }: any = ChatState();

  return (
    <ScrollableFeed
      animateScroll={(element) => {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth",
        });
      }}
      className="px-3 pt-3 overflow-x-hidden"
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
                    mt="auto"
                    mb="40px"
                    d="flex"
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
                  star={star}
                  setStar={setStar}
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
                  star={star}
                  setStar={setStar}
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
      <Box mb="10px" />
    </ScrollableFeed>
  );
};

export default ScrollableChat;

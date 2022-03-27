import { Avatar, Box, Text } from "@chakra-ui/react";

const ChatListItem = ({
  getSender,
  loggedUser,
  setSelectedChat,
  chat,
  selectedChat,
  colorMode,
  getSenderPic,
}) => {
  return (
    <Box
      onClick={() => setSelectedChat(chat)}
      bg={
        selectedChat === chat
          ? "#38B2AC"
          : colorMode === "dark"
          ? "#232b38"
          : "#E8E8E8"
      }
      color={selectedChat === chat || colorMode === "dark" ? "white" : "black"}
      px={3}
      py={2}
      borderRadius="xl"
      key={chat._id}
      boxShadow={selectedChat === chat ? "2xl" : "inner"}
      className="transition-all duration-700 ease-in-out"
      _hover={{
        backgroundColor: "#38B2AC",
        color: "white",
        boxShadow: "md",
      }}
    >
      <Text fontFamily="Nunito" fontSize={18} alignItems="center" d="flex">
        <Avatar
          name={
            !chat.isGroupChat
              ? getSender(loggedUser, chat.users)
              : chat.chatName
          }
          src={
            !chat.isGroupChat ? getSenderPic(loggedUser, chat.users) : chat.pic
          }
          width={10}
          height={10}
          mr={2}
        />
        {!chat.isGroupChat ? getSender(loggedUser, chat.users) : chat.chatName}
      </Text>
      {chat.latestMessage && (
        <>
          <Text fontSize="xs">
            <b>{chat.latestMessage.sender.name}: </b>
            {chat.latestMessage.content.length > 50
              ? chat.latestMessage.content.substring(0, 51) + "..."
              : chat.latestMessage.content}
          </Text>
        </>
      )}
    </Box>
  );
};

export default ChatListItem;

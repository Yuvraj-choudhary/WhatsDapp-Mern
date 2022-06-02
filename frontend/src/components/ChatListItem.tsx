import { Avatar, Box, Text } from "@chakra-ui/react";

const ChatListItem = ({
  getSender,
  loggedUser,
  setSelectedChat,
  chat,
  selectedChat,
  colorMode,
  getSenderPic,
}:any) => {
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
      className="transition-all duration-200 ease-in-out shadow-inner drop-shadow-md hover:shadow-2xl"
      _hover={{
        color: "white",
        bg: "#38B2AC",
      }}
    >
      <Text
        fontFamily="Nunito"
        fontSize={18}
        alignItems="center"
        display="flex"
      >
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
          <Text fontSize="xs" fontWeight="hairline" fontFamily="Nunito">
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
